"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({
  target,
  startDelay = 0,
  inView = false,
}: {
  target: number;
  startDelay?: number;
  inView?: boolean;
}) {
  const [value, setValue] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const duration = 2000;
      const begin = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - begin) / duration, 1);
        setValue(Math.floor(target * progress));
        if (progress < 1) requestAnimationFrame(tick);
        else setValue(target);
      };
      window.setTimeout(() => {
        setValue(0);
        requestAnimationFrame(tick);
      }, startDelay);
    };

    if (!inView) {
      run();
      return;
    }

    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) run();
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, startDelay, target]);

  return (
    <span ref={ref} className="counter">
      {value.toLocaleString()}
    </span>
  );
}
