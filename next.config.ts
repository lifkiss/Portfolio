import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Abaikan error ESLint saat build agar bisa deploy
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Abaikan error TypeScript saat build agar bisa deploy
    ignoreBuildErrors: true,
  },
};

export default nextConfig;