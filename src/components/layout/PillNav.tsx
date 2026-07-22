"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

export function PillNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="hidden items-center gap-0.5 rounded-full border border-border/60 bg-muted/40 p-1 md:flex">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            "rounded-full px-3.5 py-1.5 font-mono text-[0.7rem] font-medium tracking-wider uppercase transition-colors",
            active === item.href
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
