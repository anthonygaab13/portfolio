import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 só permite os valores de "quality" listados aqui nas URLs de /_next/image.
    // 95 é usado no avatar do Hero (ver components/sections/Hero.tsx) pra evitar que a
    // recompressão padrão (75) borre detalhes finos numa foto pequena e única.
    qualities: [75, 95],
  },
};

export default nextConfig;
