"use client";

import { Suspense } from "react";
import { AppShell, Container, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useSession } from "next-auth/react";

import { AppHeader, NavigationPanel, SettingsPanel } from "@/components";
import { usePageTitle } from "@/utils";
import { useBackgroundQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { SocialAppShell_Query } from "./SocialAppShell.graphql";

interface AppShellProps {
  children: React.ReactNode;
}

const SocialAppShell: React.FC<AppShellProps> = ({ children }) => {
  const [navigationPanelIsOpen, { toggle: toggleNavigationPanelIsOpen }] =
    useDisclosure(true);
  const [settingsPanelIsOpen, { toggle: toggleSettingsPanelIsOpen }] =
    useDisclosure(true);

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
          }}
        />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AppShell.Main h="100vh">
          <Container size="40rem" h="100%">
            {children}
          </Container>
        </AppShell.Main>
      </Suspense>
    </AppShell>
  );
};

export { SocialAppShell };
