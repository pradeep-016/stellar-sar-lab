import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glowColor: string;
  label?: string;
  isHub?: boolean;
}

export const HeroConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const [isLowMotion, setIsLowMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsLowMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsLowMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const keyLabels = [
      'Evaluator',
      'Policy',
      'Reward Margin',
      'Best-of-N',
      'Ground Truth',
      'Alignment',
      'PRM',
      'Correctness',
    ];

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.floor((width * height) / 14000);
      const safeCount = Math.min(Math.max(nodeCount, 28), 65);

      for (let i = 0; i < safeCount; i++) {
        const isHub = i < keyLabels.length;
        const radius = isHub ? Math.random() * 2 + 3.5 : Math.random() * 1.5 + 1.2;
        const color = isHub
          ? i % 2 === 0
            ? '#38bdf8'
            : '#22d3ee'
          : i % 3 === 0
          ? '#818cf8'
          : '#64748b';
        const glowColor = isHub ? '#38bdf888' : '#38bdf822';

        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (isLowMotion ? 0.08 : 0.4),
          vy: (Math.random() - 0.5) * (isLowMotion ? 0.08 : 0.4),
          radius,
          color,
          glowColor,
          label: isHub ? keyLabels[i] : undefined,
          isHub,
        });
      }
    };

    initNodes();

    const maxDist = Math.min(width, height) * 0.22;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric glow
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        50,
        width * 0.5,
        height * 0.4,
        width * 0.7
      );
      grad.addColorStop(0, 'rgba(14, 165, 233, 0.04)');
      grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.02)');
      grad.addColorStop(1, 'rgba(6, 9, 19, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.28;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            if (nodes[i].isHub && nodes[j].isHub) {
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 1.5})`;
              ctx.lineWidth = 1.2;
            } else {
              ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
              ctx.lineWidth = 0.6;
            }
            ctx.stroke();
          }
        }
      }

      // Draw connections to mouse cursor if within range
      if (mouseRef.current.active) {
        const mouseDist = 180;
        for (let i = 0; i < nodes.length; i++) {
          const dx = nodes[i].x - mouseRef.current.x;
          const dy = nodes[i].y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseDist) {
            const alpha = (1 - dist / mouseDist) * 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Repel slightly
            if (!isLowMotion) {
              nodes[i].x += (dx / dist) * 0.8;
              nodes[i].y += (dy / dist) * 0.8;
            }
          }
        }
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!isLowMotion) {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }

        // Draw node glow
        if (n.isHub) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = n.glowColor;
          ctx.fill();
        }

        // Draw core node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        // Draw label if hub
        if (n.label && width > 640) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = 'rgba(203, 213, 225, 0.65)';
          ctx.fillText(n.label, n.x + n.radius + 6, n.y + 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLowMotion]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 pointer-events-auto overflow-hidden opacity-80"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 pointer-events-none" />
    </div>
  );
};

