// @ts-ignore
import withBundleAnalyzerConstructor from "@next/bundle-analyzer";

const withBundleAnalyzer = withBundleAnalyzerConstructor({
  enabled: process.env.ANALYZE === "true",
});

const getRemotePattern = (url) => {
  const [protocol, uri] = (url ?? "").split("://");
  const uriSplitColon = uri?.split(":");
  const hasPort = uriSplitColon?.length > 1;
  const hostAndPortAndPath = hasPort
    ? uriSplitColon?.[1]?.split("/")
    : uriSplitColon?.[0]?.split?.("/");
  const hostname = hasPort ? uriSplitColon?.[0] : hostAndPortAndPath?.[0] ?? "";
  const port = hasPort ? hostAndPortAndPath?.[0] : "";
  const pathname = `/${(hasPort ? hostAndPortAndPath?.[1] : hostAndPortAndPath?.[1]) ?? ""
    }/**`;

  return {
    protocol: protocol ?? "https",
    hostname,
    port,
    pathname,
  };
};

const remotePatterns = [
  process.env.NEXT_PUBLIC_SERVER_TUS_URL,
  process.env.NEXT_PUBLIC_OBJECT_STORE_URL,
]
  .filter(Boolean)
  .map(getRemotePattern);

const config = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "highlight.js",
      "cropperjs",
      "@tabler/icons",
      "@tabler/icons-react",
    ],
  },
  images: {
    remotePatterns,
  },
});

export default config;
