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
import ImageEditor from "@uppy/image-editor";
import Webcam from "@uppy/webcam";
import Transloadit from "@uppy/transloadit";
import Tus from "@uppy/tus";
import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";

import { createImagesFromUrls, getBasename } from "@/utils";

import { CreateImages_Mutation } from "./ImageUploadButton.graphql";
import classes from "./ImageUploadButton.module.css";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/image-editor/dist/style.min.css";
import "@uppy/webcam/dist/style.min.css";

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

    const [createImages] = useMutation(CreateImages_Mutation);

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
      })
        .use(Dashboard, {
          trigger: `#${uploaderModalTriggerId}`,
          closeModalOnClickOutside: true,
          theme: colorScheme,
          proudlyDisplayPoweredByUppy: false,
          autoOpenFileEditor: false,
          closeAfterFinish: true,
          metaFields: [
            {
              id: "name",
              name: "Name",
              placeholder: "file name (defaults to original file name)",
            },
            {
              id: "description",
              name: "description",
              placeholder:
                "description to show (defaults to file name or original file name)",
            },
          ],
          locale: {
            strings: {
              dropPasteImportFiles: "Drag-and-drop files here or import from:",
            },
          },
        })
        .use(Webcam, {
          target: Dashboard,
          preferredVideoMimeType: "video/av1",
          preferredImageMimeType: "image/avif",
          modes: ["picture"],
        })
        .use(ImageEditor, { target: Dashboard });

      if (process.env.NODE_ENV === "development") {
        newUppy
          .use(Tus, {
            endpoint: process.env.NEXT_PUBLIC_CLIENT_TUS_URL,
            removeFingerprintOnSuccess: true,
          })
          .on("complete", async ({ successful }) => {
            const images = successful?.map(
              ({
                uploadURL,
                name: originalName,
                meta: { name, description },
              }) => ({
                url: uploadURL,
                name: name || originalName,
                description:
                  (description as string) ||
                  getBasename(name) ||
                  getBasename(originalName),
              }),
            );

            createImagesFromUrls(userId, createImages, handleSelect, images);
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
            waitForMetadata: true,
          })
          .on("transloadit:complete", async ({ results: { finished } }) => {
            const images = finished?.map(
              ({ ssl_url, original_name, meta: { name, description } }) => ({
                url: ssl_url,
                name: name || original_name,
                description:
                  description ||
                  getBasename(name) ||
                  getBasename(original_name),
              }),
            );

            createImagesFromUrls(userId, createImages, handleSelect, images);
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
