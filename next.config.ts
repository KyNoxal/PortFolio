/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Next.js n'optimise pas les images en mode export
  },
  basePath: "/PortFolio", // Change par le nom de ton repo GitHub
  assetPrefix: "/PortFolio", // Corrige les liens CSS/JS
  trailingSlash: true, // Ajoute un slash à la fin des URLs => génère `index.html`
};

export default nextConfig;
