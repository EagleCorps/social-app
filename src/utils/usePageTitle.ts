import { useMemo } from "react";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useParams, usePathname } from "next/navigation";

import { UsePageTitle_Query } from "./usePageTitle.graphql";

const usePageTitle = () => {
  const pathName = usePathname();
  const { userId = "" } = useParams();

  const { data: { usersByPk: { name: userName } = {} } = {} } = useQuery(
    UsePageTitle_Query,
    {
      variables: { userId },
      skip: !userId,
    },
  );

  const manualTitlesMap = useMemo(
    () => ({
      "/users": "People",
      "/posts": "Feed",
    }),
    [],
  );

  const manualTitle = useMemo(() => manualTitlesMap[pathName], [pathName]);

  return (
    manualTitle ??
    (userName
      ? `${userName}'s Profile`
      : pathName
        .replace(/\d/g, (_match, letter) => ` ${letter.toUpperCase()}`)
        .trim())
  );
};

export { usePageTitle };
