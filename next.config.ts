import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/why-us", destination: "/about", permanent: true },
      { source: "/book-a-call", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
