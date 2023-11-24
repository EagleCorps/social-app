"use client";

import { AppShell, ActionIcon, Group, Flex, Space } from "@mantine/core";
import { IconMenu2, IconSettings } from "@tabler/icons-react";

import { AppTitle } from "@/components";

import classes from "./AppHeader.module.css";

interface AppHeaderProps {
  navigationPanelIsOpen: boolean;
  settingsPanelIsOpen: boolean;
  toggleNavigationPanelIsOpen: () => void;
  toggleSettingsPanelIsOpen: () => void;
  pageTitle?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  navigationPanelIsOpen,
  settingsPanelIsOpen,
  toggleNavigationPanelIsOpen,
  toggleSettingsPanelIsOpen,
  pageTitle,
}) => (
  <AppShell.Header classNames={{ header: classes.header }}>
    <Flex justify="space-between" align="center" h="100%">
      <ActionIcon
        onClick={toggleNavigationPanelIsOpen}
        variant="subtle"
        hidden={navigationPanelIsOpen}
        classNames={{ root: classes.openNavigationPanelButton }}
      >
        <IconMenu2 />
      </ActionIcon>

      <Group grow>
        <AppTitle title={pageTitle} />
      </Group>

      <Group w="lg">
        {settingsPanelIsOpen ? (
          <Space />
        ) : (
          <ActionIcon
            variant="subtle"
            onClick={toggleSettingsPanelIsOpen}
            classNames={{ root: classes.openSettingsPanelButton }}
          >
            <IconSettings />
          </ActionIcon>
        )}
      </Group>
    </Flex>
  </AppShell.Header>
);

export { AppHeader };
