const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const [protocol, uri] = process.env.NEXT_PUBLIC_SERVER_TUS_URL?.split("://");
const uriSplitColon = uri?.split(":");
const hasPort = uriSplitColon?.length > 1;
const hostAndPortAndPath = hasPort
  ? uriSplitColon?.[1]?.split("/")
  : uriSplitColon?.[0]?.split?.("/");
const hostname = hasPort ? uriSplitColon?.[0] : hostAndPortAndPath?.[0] ?? "";
const port = hasPort ? hostAndPortAndPath?.[0] : "";
const pathname = `/${
  (hasPort ? hostAndPortAndPath?.[1] : hostAndPortAndPath?.[1]) ?? ""
}/**`;

const remotePatterns = [
  {
    protocol,
    hostname,
    port,
    pathname,
  },
];

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    remotePatterns,
  },
});
