"use client";

import { SegmentedControl, useMantineColorScheme } from "@mantine/core";

const ColorSchemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <SegmentedControl
      fullWidth
      radius="md"
      value={colorScheme}
      onChange={setColorScheme as (colorScheme: string) => void}
      data={[
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
        { label: "Auto", value: "auto" },
      ]}
    />
  );
};

export { ColorSchemeToggle };
