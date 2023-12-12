"use client";

import { Suspense } from "react";
import { AppShell, Container, Loader, Skeleton } from "@mantine/core";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import { useSession } from "next-auth/react";
import { useBackgroundQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { AppHeader, NavigationPanel, SettingsPanel } from "@/components";
import { usePageTitle } from "@/utils";
import { SocialAppShell_Query } from "./SocialAppShell.graphql";

interface AppShellProps {
  children: React.ReactNode;
}

const SocialAppShell: React.FC<AppShellProps> = ({ children }) => {
  const [navigationPanelIsOpen, { toggle: toggleNavigationPanelIsOpen }] =
    useDisclosure(true);
  const [settingsPanelIsOpen, { toggle: toggleSettingsPanelIsOpen }] =
    useDisclosure(true);
  const { ref: appHeaderRef, height: appHeaderHeight } = useElementSize();

  const {
    data: {
      user: { id: userId },
    },
  } = useSession();

  useBackgroundQuery(SocialAppShell_Query, { variables: { userId } });

  const pageTitle = usePageTitle();

  return (
    <AppShell
      header={{ height: "4rem" }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: {
          mobile: !navigationPanelIsOpen,
          desktop: !navigationPanelIsOpen,
        },
      }}
      aside={{
        width: 300,
        breakpoint: "sm",
        collapsed: {
          mobile: !settingsPanelIsOpen,
          desktop: !settingsPanelIsOpen,
        },
      }}
      padding="lg"
    >
      <AppHeader
        {...{
          navigationPanelIsOpen,
          settingsPanelIsOpen,
          toggleNavigationPanelIsOpen,
          toggleSettingsPanelIsOpen,
          pageTitle,
        }}
        ref={appHeaderRef}
      />
      <NavigationPanel
        {...{
          userId,
          toggleNavigationPanelIsOpen,
        }}
      />
      <Suspense fallback={<Loader />}>
        <SettingsPanel
          {...{
            userId,
            toggleSettingsPanelIsOpen,
            appHeaderHeight,
          }}
        />
      </Suspense>

      <AppShell.Main>
        <Container size="40rem">
          <Suspense fallback={<Skeleton h="100%" w="100%" />}>
            {children}
          </Suspense>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export { SocialAppShell };
