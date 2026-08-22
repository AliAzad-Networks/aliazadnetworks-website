"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CanvasTextProps {
  text: string;
  className?: string;
  colors?: string[];
  animationDuration?: number;
  lineWidth?: number;
  lineGap?: number;
  curveIntensity?: number;
}

export function CanvasText({
  text,
  className = "",
  colors = ["#f97316", "#fb923c", "#fdba74", "#fed7aa", "#ffedd5"],
  animationDuration = 5,
  lineWidth = 1.5,
  lineGap = 10,
  curveIntensity = 60,
}: CanvasTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let lines: Array<{ y: number; points: number[] }> = [];

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;

      const count = Math.floor(height / lineGap);
      lines = Array.from({ length: count }, (_, i) => ({
        y: i * lineGap + lineGap / 2,
        points: Array.from({ length: 20 }, () => Math.random() * width),
      }));
    };

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(container);
    updateSize();

    const animate = (time: number) => {
      if (!ctx || !canvas) return;
      if (previousTimeRef.current === undefined) {
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      lines.forEach((line, idx) => {
        const progress = (time / 1000) * (1 / animationDuration) + idx * 0.05;
        const offset = Math.sin(progress * Math.PI * 2) * curveIntensity;

        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = colors[idx % colors.length];

        const startX = 0;
        const startY = line.y + offset;
        ctx.moveTo(startX, startY);

        for (let i = 1; i < line.points.length; i++) {
          const x = (i / (line.points.length - 1)) * width;
          const y = line.y + offset + Math.sin(progress * Math.PI * 2 + i) * curveIntensity / 2;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      resizeObserver.disconnect();
    };
  }, [colors, animationDuration, lineWidth, lineGap, curveIntensity]);

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block", className)}
      style={{ lineHeight: 1.2 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ mixBlendMode: "normal" }}
      />
      <span className="relative z-10 text-transparent bg-clip-text" style={{ color: "transparent" }}>
        {text}
      </span>
    </div>
  );
}