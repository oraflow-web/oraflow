import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@oraflow/ui", "@oraflow/sanity", "@oraflow/i18n"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
