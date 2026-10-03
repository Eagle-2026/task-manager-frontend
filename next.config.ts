import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/backend/:path*",
        destination:
          "https://task-manager-api-6liy.onrender.com/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;