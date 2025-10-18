/*
* is a regular Node.js module, not a JSON file.
* It gets used by the Next.js server and build phases, and it's not included in the browser build.
* */

import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',  // Enable when ANALYZE is 'true'
})({
    // Your existing Next.js configuration can go here
    experimental: {
        globalNotFound: true,
    },
});


export default nextConfig;
