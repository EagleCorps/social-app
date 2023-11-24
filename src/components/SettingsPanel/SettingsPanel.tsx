"use client";

import { Suspense } from "react";
import {
  ActionIcon,
  AppShell,
  Divider,
  Group,
  Loader,
  Space,
  Stack,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconChevronRightPipe } from "@tabler/icons-react";

import {
  ColorSchemeToggle,
  AuthButton,
  BioSettingsSection,
  ProfileImageSettingsSection,
  NameSettingsSection,
} from "@/components";

import classes from "./SettingsPanel.module.css";

interface SettingsPanelProps {
  userId?: string;
  toggleSettingsPanelIsOpen: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  userId,
  toggleSettingsPanelIsOpen,
}) => (
  <AppShell.Aside classNames={{ aside: classes.aside }}>
    <Group justify="space-between">
      <Tooltip label="Close settings panel">
        <ActionIcon
          onClick={toggleSettingsPanelIsOpen}
          variant="subtle"
          color="gray"
        >
          <IconChevronRightPipe />
        </ActionIcon>
      </Tooltip>
      <Title order={2}>Settings</Title>
    </Group>

    <Divider classNames={{ root: classes.divider }} />

    <Stack h="100%" justify="space-between">
      <Stack h="100%">
        <ProfileImageSettingsSection userId={userId} />

        <Space />
        <Space />
        <Divider />

        <NameSettingsSection userId={userId} />

        <Space />
        <Space />
        <Divider />

        <BioSettingsSection userId={userId} />

        <Space />
        <Space />
        <Divider />

        <Stack>
          <Title order={3}>Light/Dark Mode</Title>
          <ColorSchemeToggle />
        </Stack>
      </Stack>

      <Divider />

      <Group>
        <Suspense fallback={<Loader />}>
          <AuthButton userId={userId} />
        </Suspense>
      </Group>
    </Stack>
  </AppShell.Aside>
);

export { SettingsPanel };
