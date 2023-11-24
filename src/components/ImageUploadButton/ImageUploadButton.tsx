"use client";

import { forwardRef, useEffect, useState } from "react";
import { IconUpload } from "@tabler/icons-react";
import {
  ActionIcon,
  BackgroundImage,
  Paper,
  useComputedColorScheme,
} from "@mantine/core";
import { useId } from "@mantine/hooks";
import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import Compressor from "@uppy/compressor";
import ImageEditor from "@uppy/image-editor";
import Transloadit from "@uppy/transloadit";
import Tus from "@uppy/tus";
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import { notifications } from "@mantine/notifications";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/image-editor/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";
import "@uppy/screen-capture/dist/style.min.css";
import "@uppy/audio/dist/style.min.css";

import { CreateImage_Mutation } from "./ImageUploadButton.graphql";
import classes from "./ImageUploadButton.module.css";
import { getImageMetadata } from "@/utils";

interface ImageUploadButtonProps {
  url: string;
  buttonId: string;
  handleSelect: (id: string, url: string, fileName: string) => void;
  paperClass?: string;
  borderRadius?: string;
}

const ImageUploadButton = forwardRef<HTMLDivElement, ImageUploadButtonProps>(
  (
    {
      url,
      buttonId,
      handleSelect,
      borderRadius = "md",
      paperClass = classes.paper,
    },
    ref,
  ) => {
    const {
      data: {
        user: { id: userId },
      },
    } = useSession();
    const uploaderModalTriggerId = useId(buttonId);
    const [uppy, setUppy] = useState<Uppy | undefined>();
    const colorScheme = useComputedColorScheme("light");

    const [createImage] = useMutation(CreateImage_Mutation);

    useEffect(() => {
      if (uppy) {
        uppy.close({ reason: "unmount" });
      }

      const newUppy = new Uppy({
        restrictions: {
          allowedFileTypes: ["image/*"],
          maxNumberOfFiles: 1,
          // 10 MB
          maxFileSize: 10485760,
        },
        onBeforeFileAdded: () => true,
      })
        .use(Dashboard, {
          trigger: `#${uploaderModalTriggerId}`,
          closeModalOnClickOutside: true,
          theme: colorScheme,
          proudlyDisplayPoweredByUppy: false,
          autoOpenFileEditor: true,
        })
        .use(ImageEditor, { target: Dashboard })
        .use(Compressor);

      if (process.env.NODE_ENV === "development") {
        newUppy
          .use(Tus, { endpoint: process.env.NEXT_PUBLIC_CLIENT_TUS_URL })
          .on("complete", async ({ successful: [{ uploadURL, name }] }) => {
            if (!uploadURL) {
              notifications.show({
                title: "Upload Error!",
                message:
                  "Something went wrong with your upload. Please wait a few moments and try again",
                color: "red",
              });
            } else {
              const { naturalHeight: height, naturalWidth: width } =
                await getImageMetadata(uploadURL);

              const {
                data: {
                  insertImagesOne: { id: profileImageId },
                },
              } = await createImage({
                variables: {
                  uploaderId: userId,
                  url: uploadURL,
                  altText: name,
                  width,
                  height,
                },
              });

              handleSelect(profileImageId, uploadURL, name);
            }
          });
      } else {
        newUppy
          .use(Transloadit, {
            assemblyOptions: {
              params: {
                auth: {
                  key: process.env.NEXT_PUBLIC_TRANSLOADIT_API_KEY ?? "",
                },
                template_id: process.env.NEXT_PUBLIC_TRANSLOADIT_TEMPLATE_ID,
              },
            },
            waitForEncoding: true,
          })
          .on("transloadit:complete", async ({ results }) => {
            const uploadUrl = results?.compress_image[0]?.ssl_url;
            const uploadName = results?.compress_image[0]?.original_name;

            const { naturalHeight: height, naturalWidth: width } =
              await getImageMetadata(uploadUrl);

            const {
              data: {
                insertImagesOne: { id: profileImageId },
              },
            } = await createImage({
              variables: {
                uploaderId: userId,
                url: uploadUrl,
                altText: uploadName,
                width,
                height,
              },
            });

            handleSelect(profileImageId, uploadUrl, uploadName);
          });
      }

      setUppy(newUppy);
    }, [uploaderModalTriggerId, colorScheme]);

    return (
      <Paper
        ref={ref}
        radius={borderRadius}
        classNames={{
          root: paperClass,
        }}
      >
        <BackgroundImage
          src={url ?? ""}
          radius={borderRadius}
          classNames={{ root: classes.backgroundImage }}
        >
          <ActionIcon
            variant="light"
            id={uploaderModalTriggerId}
            radius={borderRadius}
            h="100%"
            w="100%"
            classNames={{
              root:
                colorScheme === "light"
                  ? classes.overlayLight
                  : classes.overlayDark,
            }}
          >
            <IconUpload />
          </ActionIcon>
        </BackgroundImage>
      </Paper>
    );
  },
);

export { ImageUploadButton };
