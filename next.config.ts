import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		useCache: true,
	},
	images: {
		remotePatterns: [new URL(`${process.env.STRAPI_URL}/**`), new URL("https://whsmaritime.com/**")],
	},
};

export default nextConfig;
