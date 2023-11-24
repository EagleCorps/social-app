import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "./global.css";

import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { NavigationProgress } from "@mantine/nprogress";

import { theme } from "@/theme";
import { ApolloWrapper } from "@/components";

export const metadata = {
  title: "EagleCorps Social App",
  description: "Social App for EagleCorps alumni.",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="/logo.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=yes"
        />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <NavigationProgress />
          <SessionProvider>
            <ApolloWrapper>{children}</ApolloWrapper>
          </SessionProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
