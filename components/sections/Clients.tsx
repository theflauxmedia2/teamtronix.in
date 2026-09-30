"use client";

import { useEffect, useRef, useState } from "react";
import { clientGroups, type ClientMark } from "@/lib/products";

const PIXELS_PER_SECOND = 42;

function marqueeItems(clients: ClientMark[]) {
  const half: ClientMark[] = [];
  while (half.length < 12) half.push(...clients);
  return [...half, ...half];
}

function ClientRow({
  label,
  clients,
  reverse,
}: {
  label: string;
  clients: ClientMark[];
  reverse: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const loop = marqueeItems(clients);
  const midpoint = loop.length / 2;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const measure = () => {
      const distance = el.scrollWidth / 2;
      if (distance > 0) setDuration(distance / PIXELS_PER_SECOND);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="clients-row">
      <span className="clients-cat">{label}</span>
      <ul className="clients-sr-list visually-hidden">
        {clients.map((client) => (
          <li key={`${label}-sr-${client.name}`}>{client.name}</li>
        ))}
      </ul>
      <div className="clients-track">
        <div
          ref={scrollRef}
          className={`clients-scroll${reverse ? " reverse" : ""}`}
          style={
            duration
              ? { animationDuration: `${duration}s` }
              : { animationPlayState: "paused" }
          }
        >
          {loop.map((client, index) => {
            const duplicate = index >= midpoint;
            return (
              <span
                className="client-logo"
                key={`${label}-${client.name}-${index}`}
                aria-hidden={duplicate || undefined}
              >
                {client.src ? (
                  <img
                    src={client.src}
                    alt={duplicate ? "" : `${client.name} – Teamtronix client`}
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={40}
                  />
                ) : (
                  <span className="client-name">{client.name}</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <div className="clients-bar" id="clients">
      <div className="container">
        <div className="clients-bar-inner">
          <span className="clients-label">Trusted By 4000+ Clients</span>
          {clientGroups.map((group, groupIndex) => (
            <ClientRow
              key={group.label}
              label={group.label}
              clients={group.clients}
              reverse={groupIndex % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
