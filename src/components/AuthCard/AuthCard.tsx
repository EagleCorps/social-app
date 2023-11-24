"use client";

import { RedirectType, redirect } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import {
  Button,
  Card,
  Center,
  Image,
  Loader,
  Skeleton,
  Space,
  Text,
  Title,
} from "@mantine/core";

import classes from "./AuthCard.module.css";

interface AuthCardProps {}

const AuthCard: React.FC<AuthCardProps> = () => {
  const { data: session, status } = useSession();

  const isLoading = status === "loading";

  if (!isLoading && session) {
    redirect("/posts", RedirectType.replace);
  }

  return (
    <Center h="100%">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section classNames={{ section: classes.logoSection }}>
          <Image src="/logo.svg" alt="EagleCorps Logo" h={160} fit="contain" />
        </Card.Section>

        <Space h="lg" />

        <Title order={3}>Welcome to EagleCorps</Title>

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={() => signIn("google")}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Sign Up or Log In"}
        </Button>
      </Card>
    </Center>
  );
};

export { AuthCard };
