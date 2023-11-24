"use client";

import { Center, Title } from "@mantine/core";

interface AppTitleProps {
  title?: string;
}

const AppTitle: React.FC<AppTitleProps> = ({ title }) => {
  const appTitle = title ?? "Social App";

  return (
    <Center>
      <Title>{appTitle}</Title>
    </Center>
  );
};

export { AppTitle };
