"use client";

import { Anchor, Code, Text, Title } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { isValidElement } from "react";

interface SocialAppMarkdownProps {
  body: string;
}

const SocialAppMarkdown: React.FC<SocialAppMarkdownProps> = ({ body }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    disallowedElements={["img"]}
    unwrapDisallowed
    components={{
      h1: ({ node, ref, ...props }) => <Title order={1} {...props} />,
      h2: ({ node, ref, ...props }) => <Title order={2} {...props} />,
      h3: ({ node, ref, ...props }) => <Title order={3} {...props} />,
      h4: ({ node, ref, ...props }) => <Title order={4} {...props} />,
      h5: ({ node, ref, ...props }) => <Title order={5} {...props} />,
      h6: ({ node, ref, ...props }) => <Title order={6} {...props} />,
      p: ({ node, ref, ...props }) => <Text {...props} />,
      a: ({ node, href, title, ref, ...props }) => (
        <Anchor component={Link} href={href ?? ""} target="_blank" {...props} />
      ),
      code: ({ node, className, children, ref, ...props }) => (
        <Code {...props}>{String(children).replace(/\n$/, "")}</Code>
      ),
      pre: ({ children }) => {
        if (isValidElement(children)) {
          const {
            node,
            className,
            children: innerChildren,
            ref,
            ...props
          } = children.props;

          return (
            <CodeHighlight
              language={(className ?? "").replace(/^language-/i, "")}
              code={String(innerChildren).replace(/\n$/, "")}
              {...props}
            />
          );
        }

        return <></>;
      },
    }}
  >
    {body}
  </ReactMarkdown>
);

export { SocialAppMarkdown };
