"use client";

import {
  Loader,
  ActionIcon,
  Button,
  Text,
  createTheme,
  rem,
  ScrollArea,
  ScrollAreaAutosize,
  Notification,
  TextInput,
} from "@mantine/core";

import buttonClasses from "./Button.module.css";
import actionIconClasses from "./ActionIcon.module.css";

const theme = createTheme({
  primaryColor: "blue",
  focusRing: "never",
  defaultRadius: "xl",
  headings: {
    // Properties for all headings
    fontWeight: "300",

    // Properties for individual headings
    sizes: {
      h1: { fontSize: rem(30) },
      h2: { fontSize: rem(24) },
      h3: { fontSize: rem(20) },
      h4: { fontSize: rem(18) },
      h5: { fontSize: rem(16) },
      h6: { fontSize: rem(14) },
    },
  },
  colors: {
    dark: [
      "#c9c9c9",
      "#c1c1c1",
      "#afafaf",
      "#4a4a4a",
      "#383838",
      "#2e2e2e",
      "#242424",
      "#212121",
      "#141414",
      "#111111",
    ],
  },
  components: {
    Loader: Loader.extend({
      defaultProps: {
        type: "dots",
      },
    }),
    ActionIcon: ActionIcon.extend({
      classNames: actionIconClasses,
      vars: (_theme, { size }) => {
        switch (size) {
          case "lg-padded":
            return {
              root: {
                "--ai-size": "var(--ai-size-lg)",
              },
            };
          default:
            return undefined;
        }
      },
    }),
    Button: Button.extend({
      classNames: buttonClasses,
    }),
    Text: Text.extend({
      defaultProps: {
        fw: "400",
      },
    }),
    ScrollArea: ScrollArea.extend({
      defaultProps: {
        offsetScrollbars: true,
        scrollbarSize: 2,
        type: "auto",
      },
    }),
    ScrollAreaAutosize: ScrollAreaAutosize.extend({
      defaultProps: {
        offsetScrollbars: true,
        scrollbarSize: 2,
        type: "auto",
      },
    }),
    Notification: Notification.extend({
      defaultProps: {
        radius: "md",
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        radius: "md",
      },
    }),
  },
});

export { theme };
