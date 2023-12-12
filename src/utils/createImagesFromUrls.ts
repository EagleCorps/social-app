import { notifications } from "@mantine/notifications";
import { MutationFunction } from "@apollo/client";

import {
  CreateImages_MutationMutation,
  CreateImages_MutationMutationVariables,
} from "@/graphql/graphql";

const createImagesFromUrls = async (
  userId: string,
  createImage: MutationFunction<
    CreateImages_MutationMutation,
    CreateImages_MutationMutationVariables
  >,
  handleSelect: (id: string, url: string, fileName: string) => void,
  images: {
    url: string;
    name: string;
    description: string;
  }[] = [],
) => {
  if (images.length === 0) {
    notifications.show({
      title: "Upload Error!",
      message:
        "Something went wrong with your upload. Please wait a few moments and try again",
      color: "red",
    });
  } else {
    const imageObjects = await Promise.all(
      images.map(async ({ url, name, description }) => {
        const imageData = await fetch("/api/get-image-metadata", {
          method: "POST",
          body: JSON.stringify({ url }),
        });
        const { height, width, blurDataUrl } = await imageData.json();

        return {
          uploaderId: userId,
          url,
          name,
          description,
          width,
          height,
          blurDataUrl,
        };
      }),
    );

    const {
      data: {
        insertImages: {
          returning: [{ id: profileImageId, url, name }],
        },
      },
    } = await createImage({
      variables: { imageObjects },
    });

    handleSelect(profileImageId, url, name);
  }
};

export { createImagesFromUrls };
