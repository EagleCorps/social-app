import { graphql } from "@/graphql";

const UsePageTitle_Query = graphql(`
  query UsePageTitle_Query($userId: uuid!) {
    usersByPk(id: $userId) {
      id
      name
    }
  }
`);

export { UsePageTitle_Query };
