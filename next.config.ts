import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://rebeccaiaaland.com",
        permanent: true,
      },
      {
        source: "/services",
        destination: "https://rebeccaiaaland.com/services",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "https://rebeccaiaaland.com/pricing",
        permanent: true,
      },
      {
        source: "/work",
        destination: "https://rebeccaiaaland.com/work",
        permanent: true,
      },
      {
        source: "/about",
        destination: "https://rebeccaiaaland.com/about",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://rebeccaiaaland.com/contact",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://rebeccaiaaland.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
