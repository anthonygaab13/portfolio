"use client";

// Anima a entrada de qualquer bloco de conteúdo quando ele entra na tela (scroll) — usado
// pra envolver seções inteiras sem precisar animar cada elemento interno individualmente.
// Client Component, mas os "children" continuam podendo ser Server Components normalmente:
// o Next.js renderiza o conteúdo servidor-side e só entrega pronto pra esse wrapper animar.
//
// Respeita prefers-reduced-motion automaticamente (Motion detecta e reduz a animação pra
// só um fade, sem deslocamento) — ver https://motion.dev/docs/react-accessibility.

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  /** Atraso em segundos — útil pra escalonar (stagger) itens de uma lista. */
  delay?: number;
  /** Deslocamento vertical inicial, em px. */
  y?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
