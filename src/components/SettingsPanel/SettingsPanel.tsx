"use client";

import { Suspense } from "react";
import {
  ActionIcon,
  AppShell,
  Divider,
  Group,
  Loader,
  ScrollArea,
  Space,
  Stack,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconChevronRightPipe } from "@tabler/icons-react";
import { useElementSize } from "@mantine/hooks";

import {
  ColorSchemeToggle,
  AuthButton,
  BioSettingsSection,
  ProfileImageSettingsSection,
  NameSettingsSection,
} from "@/components";

import classes from "./SettingsPanel.module.css";

interface SettingsPanelProps {
  appHeaderHeight: number;
  userId?: string;
  toggleSettingsPanelIsOpen: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  appHeaderHeight,
  userId,
  toggleSettingsPanelIsOpen,
}) => {
  const { ref: headerRef, height: headerHeight } = useElementSize();
  const { ref: footerRef, height: footerHeight } = useElementSize();

  return (
    <AppShell.Aside classNames={{ aside: classes.aside }} h="100%">
      <Stack gap={0} h="100%">
        <Stack ref={headerRef}>
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
        </Stack>

        <Divider classNames={{ root: classes.dividerTop }} />

        <ScrollArea
          type="hover"
          h={`calc(100% - ${appHeaderHeight}px - ${headerHeight}px - ${footerHeight}px - 4*var(--mantine-spacing-md) - 2px)`}
        >
          <Stack justify="flex-start" py="md">
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
        </ScrollArea>

        <Divider classNames={{ root: classes.dividerBottom }} />

        <Stack ref={footerRef}>
          <Group>
            <Suspense fallback={<Loader />}>
              <AuthButton userId={userId} />
            </Suspense>
          </Group>
        </Stack>
      </Stack>
    </AppShell.Aside>
  );
};

export { SettingsPanel };
