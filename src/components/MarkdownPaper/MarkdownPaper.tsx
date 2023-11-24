import { Overlay, Paper, PaperProps, ScrollArea } from "@mantine/core";
import { SocialAppMarkdown } from "../SocialAppMarkdown";
import { forwardRef } from "react";

interface MarkdownPaperProps {
  content: string;
  maxHeight?: string | number;
  isDisabled?: boolean;
  paperProps?: PaperProps;
}

const MarkdownPaper = forwardRef<HTMLDivElement, MarkdownPaperProps>(
  ({ content, maxHeight = "100%", isDisabled = false, paperProps }, ref) => (
    <>
      <Paper ref={ref} p="md" shadow="xs" radius="md" {...paperProps}>
        <ScrollArea.Autosize mah={maxHeight} scrollbarSize={2}>
          <SocialAppMarkdown body={content} />

          {isDisabled && (
            <Overlay color="black" backgroundOpacity={0.2} blur={0.5} m={0} />
          )}
        </ScrollArea.Autosize>
      </Paper>
      {false && (
        <ScrollArea.Autosize mah={maxHeight} scrollbarSize={2}>
          <SocialAppMarkdown body={content} />
          {isDisabled && <Overlay color="black" backgroundOpacity={0.2} />}
        </ScrollArea.Autosize>
      )}
    </>
  ),
);

export { MarkdownPaper };
