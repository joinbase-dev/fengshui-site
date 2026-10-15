"use client";

import { useEffect, useRef } from "react";

type DotFieldProps = {
  className?: string;
};

// Grid spacing and dot radius of the design's "dot svg animation" (1:793): dots 2.58px
// across, 23.22px apart, in CSS pixels. The same values draw the CSS fallback grid (.dot-field in
// app/styles/motion.css), so the swap to the canvas does not shift.
const spacing = 23.22;
const radius = 1.29;
// How far the pointer reaches, how far it pushes a dot at most, and how much a dot
// grows right under it.
const reach = 110;
const push = 14;
const grow = 1.2;
// Fraction of the remaining distance a dot covers each frame, so it eases in and out.
const follow = 0.16;

// The dotted panel beside the service list. Under the pointer the dots drift away
// from it and swell a little, then settle back when it leaves.
//
// Kept cheap: the dots are drawn on one canvas, frames run only while a dot is still
// moving, nothing runs while the panel is off screen, and the page renders the grid
// in CSS until the canvas takes over. With reduced motion, or without JavaScript, the
// CSS grid stays and nothing moves. Text laid over the field should not take pointer
// events, so the pointer reaches the field under it.
export function DotField({ className = "" }: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const field = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !field || !context) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const color = getComputedStyle(field).color;
    let columns = 0;
    let rows = 0;
    let originX = 0;
    let originY = 0;
    // Per dot: current offset and size, as flat arrays.
    let offsetX = new Float32Array(0);
    let offsetY = new Float32Array(0);
    let scale = new Float32Array(0);
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;
    let visible = true;

    function layout() {
      if (!canvas || !context) return;
      const { width, height } = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      // An odd count with a dot on the centre line, as the CSS grid draws it.
      columns = 2 * Math.floor(width / spacing / 2) + 1;
      rows = 2 * Math.floor(height / spacing / 2) + 1;
      originX = width / 2 - ((columns - 1) / 2) * spacing;
      originY = height / 2 - ((rows - 1) / 2) * spacing;
      offsetX = new Float32Array(columns * rows);
      offsetY = new Float32Array(columns * rows);
      scale = new Float32Array(columns * rows).fill(1);
      draw();
    }

    // Moves every dot a step towards where the pointer wants it and redraws. Returns
    // whether any dot is still on its way.
    function step(): boolean {
      let moving = false;
      for (let row = 0, i = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++, i++) {
          let targetX = 0;
          let targetY = 0;
          let targetScale = 1;
          if (pointer) {
            const dx = originX + column * spacing - pointer.x;
            const dy = originY + row * spacing - pointer.y;
            const distance = Math.hypot(dx, dy);
            if (distance < reach && distance > 0) {
              const strength = (1 - distance / reach) ** 2;
              targetX = (dx / distance) * push * strength;
              targetY = (dy / distance) * push * strength;
              targetScale = 1 + grow * strength;
            }
          }
          offsetX[i] += (targetX - offsetX[i]) * follow;
          offsetY[i] += (targetY - offsetY[i]) * follow;
          scale[i] += (targetScale - scale[i]) * follow;
          if (
            Math.abs(targetX - offsetX[i]) > 0.05 ||
            Math.abs(targetY - offsetY[i]) > 0.05 ||
            Math.abs(targetScale - scale[i]) > 0.005
          ) {
            moving = true;
          }
        }
      }
      draw();
      return moving;
    }

    function draw() {
      if (!canvas || !context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = color;
      context.beginPath();
      for (let row = 0, i = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++, i++) {
          const x = originX + column * spacing + offsetX[i];
          const y = originY + row * spacing + offsetY[i];
          const r = radius * scale[i];
          context.moveTo(x + r, y);
          context.arc(x, y, r, 0, Math.PI * 2);
        }
      }
      context.fill();
    }

    function tick() {
      frame = visible && step() ? requestAnimationFrame(tick) : 0;
    }

    function start() {
      if (!frame && visible) frame = requestAnimationFrame(tick);
    }

    function handlePointerMove(event: PointerEvent) {
      if (!canvas) return;
      const box = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - box.left, y: event.clientY - box.top };
      start();
    }

    function handlePointerLeave() {
      pointer = null;
      start();
    }

    const resizeObserver = new ResizeObserver(layout);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    intersectionObserver.observe(canvas);

    field.addEventListener("pointermove", handlePointerMove, { passive: true });
    field.addEventListener("pointerleave", handlePointerLeave);
    layout();
    // The canvas now draws the grid; the CSS one steps aside.
    field.dataset.ready = "";

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      field.removeEventListener("pointermove", handlePointerMove);
      field.removeEventListener("pointerleave", handlePointerLeave);
      delete field.dataset.ready;
    };
  }, []);

  return (
    <div aria-hidden="true" className={`dot-field text-dot ${className}`}>
      <canvas ref={canvasRef} className="block size-full" />
    </div>
  );
}
