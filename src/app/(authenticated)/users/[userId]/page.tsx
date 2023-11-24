import { UserProfile } from "@/components";

const UserPage = ({ params: { userId } }) => (
  <>
    <UserProfile profileUserId={userId} />
  </>
);

export default UserPage;
