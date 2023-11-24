import { graphql } from "@/graphql";

const SocialAppShell_Query = graphql(`
  query SocialAppShell_Query($userId: Uuid!) {
    usersByPk(id: $userId) {
      id
      ...SettingsPanel_UserFragment
    }
  }
`);

export { SocialAppShell_Query };
