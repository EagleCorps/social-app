import { forwardRef } from "react";
import { Avatar, MantineSize } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { useFragment } from "@apollo/experimental-nextjs-app-support/ssr";

import { UserAvatar_UserFragment } from "./UserAvatar.graphql";
import classes from "./UserAvatar.module.css";

interface UserAvatarProps {
  userId: string;
  size?: MantineSize;
}

const UserAvatar = forwardRef<HTMLDivElement, UserAvatarProps>(
  ({ userId, size }, ref) => {
    const {
      data: { image, profileImage },
    } = useFragment({
      fragment: UserAvatar_UserFragment,
      fragmentName: "UserAvatar_UserFragment",
      from: {
        __typename: "Users",
        id: userId,
      },
    });

    return (
      <Avatar
        ref={ref}
        src={profileImage?.url ?? image ?? ""}
        classNames={{ image: classes.profileImageClass }}
        alt={profileImage?.description ?? ""}
        size={size}
      >
        <IconUser />
      </Avatar>
    );
  },
);

export { UserAvatar };
