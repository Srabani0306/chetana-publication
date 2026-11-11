import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/it-services", destination: "/it/services", permanent: false }];
  },
};

export default nextConfig;
