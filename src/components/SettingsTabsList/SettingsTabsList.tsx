import { Tabs } from "@mantine/core";

interface SettingsTabsListProps { }

const SettingsTabsList: React.FC<SettingsTabsListProps> = ({ }) => {
  return (
    <Tabs.List>
      <Tabs.Tab value="user">User</Tabs.Tab>
    </Tabs.List>
  );
};

export { SettingsTabsList };
