import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		useCache: true,
	},
	images: {
		remotePatterns: [new URL("http://localhost:1337/**")],
	},
};

export default nextConfig;
