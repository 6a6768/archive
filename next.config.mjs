/** @type {import('next').NextConfig} */
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const normalizedBasePath = repoBasePath
  ? repoBasePath.startsWith('/')
    ? repoBasePath
    : `/${repoBasePath}`
  : undefined;

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    // Disable Next image optimization so `next export` can emit static assets.
    unoptimized: true,
  },
  assetPrefix: normalizedBasePath ? `${normalizedBasePath}/` : undefined,
  basePath: normalizedBasePath,
};

export default nextConfig;
