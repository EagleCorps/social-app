import {
  IconChevronLeftPipe,
  IconListDetails,
  IconUserHeart,
  IconUserSearch,
  IconUsers,
  IconUsersGroup,
  IconX,
} from "@tabler/icons-react";
import {
  Anchor,
  Divider,
  AppShell,
  ActionIcon,
  Group,
  Title,
  Stack,
  NavLink as MantineNavLink,
  Tooltip,
} from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./NavigationPanel.module.css";

interface NavigationPanelProps {
  toggleNavigationPanelIsOpen: () => void;
}

const NavLink = ({ currentPath, targetPath, label, icon }) => {
  const isCurrent = currentPath.startsWith(targetPath);

  return (
    <MantineNavLink
      component={Link}
      href={targetPath}
      label={label}
      variant="filled"
      active={isCurrent}
      leftSection={icon}
    />
  );
};

const NavigationPanel: React.FC<NavigationPanelProps> = ({
  toggleNavigationPanelIsOpen,
}) => {
  const pathname = usePathname();

  return (
    <AppShell.Navbar classNames={{ navbar: classes.navbar }}>
      <Group justify="space-between">
        <Title order={2}>Navigation</Title>
        <Tooltip label="Close navigation panel">
          <ActionIcon
            onClick={toggleNavigationPanelIsOpen}
            variant="subtle"
            color="gray"
          >
            <IconChevronLeftPipe />
          </ActionIcon>
        </Tooltip>
      </Group>

      <Divider classNames={{ root: classes.divider }} />

      <Stack h="100%" justify="space-between" mt="-1rem">
        <Stack h="100%" ml="-1rem" mr="-1rem" gap={0}>
          <NavLink
            currentPath={pathname}
            targetPath="/posts"
            label="Feed"
            icon={<IconListDetails />}
          />
          <NavLink
            currentPath={pathname}
            targetPath="/users"
            label="People"
            icon={<IconUsersGroup />}
          />
        </Stack>

        <Divider />

        <Anchor href="#">Terms of Service</Anchor>
      </Stack>
    </AppShell.Navbar>
  );
};

export { NavigationPanel };
