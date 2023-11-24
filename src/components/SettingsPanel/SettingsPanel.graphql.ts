import { graphql } from "@/graphql";

const SettingsPanel_UserFragment = graphql(`
  fragment SettingsPanel_UserFragment on Users {
    id
    ...ProfileImageSettingsSection_UserFragment
    ...BioSettingsSection_UserFragment
    ...AuthButton_UserFragment
  }
`);

export { SettingsPanel_UserFragment };
