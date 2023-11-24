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
  NavLink,
  Tooltip,
} from "@mantine/core";

import classes from "./NavigationPanel.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationPanelProps {
  toggleNavigationPanelIsOpen: () => void;
}

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
            component={Link}
            href="/posts"
            label="Feed"
            variant="filled"
            active={pathname === "/posts"}
            leftSection={<IconListDetails />}
          />

          <NavLink
            component={Link}
            href="/users"
            label="People"
            variant="filled"
            active={pathname.startsWith("/users")}
            leftSection={<IconUsersGroup />}
          />
        </Stack>

        <Divider />

        <Anchor href="#">Terms of Service</Anchor>
      </Stack>
    </AppShell.Navbar>
  );
};

export { NavigationPanel };
