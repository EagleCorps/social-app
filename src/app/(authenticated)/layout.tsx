"use client";

import React, { useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { RedirectType, redirect, usePathname } from "next/navigation";
import { Center, Loader } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { nprogress } from "@mantine/nprogress";

import { SocialAppShell } from "@/components";

export default function AuthenticatedLayout({ children }: { children: any }) {
  const { data: session, status } = useSession();

  const pathname = usePathname();

  useEffect(() => {
    nprogress.start();
  }, [pathname]);

  const isLoading = useMemo(() => status === "loading", [status]);

  if (!isLoading && !session) {
    nprogress.complete();
    redirect("/", RedirectType.replace);
  }

  if (isLoading) {
    return (
      <Center h="100%">
        <Loader />
      </Center>
    );
  }

  return (
    <>
      <Notifications position="bottom-left" limit={5} />
      <SocialAppShell>{children}</SocialAppShell>
    </>
  );
}
