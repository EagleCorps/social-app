"use client";

import { Center, Title } from "@mantine/core";

interface AppTitleProps {
  title?: string;
}

const AppTitle: React.FC<AppTitleProps> = ({ title }) => {
  const appTitle = title ?? "Social App";

  return (
    <Center>
      <Title order={5}>{appTitle}</Title>
    </Center>
  );
};

export { AppTitle };
