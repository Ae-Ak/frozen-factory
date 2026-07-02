import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Projektstamm explizit festlegen – im Ordner darüber liegt ein
  // anderes Projekt mit eigener package-lock.json, das Next sonst
  // fälschlich als Workspace-Root erkennt.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
