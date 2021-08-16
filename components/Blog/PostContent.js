import styled from "styled-components"
import tw from "twin.macro"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { PlainListItem, NumberListItem } from "components/Markdown/index.js"

const MarkdownStyles = styled.div`
  > * {
    ${tw`my-4 font-post`}
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    ${tw`font-bold`}
  }
  h1 {
    ${tw`text-3xl`}
  }

  h2 {
    ${tw`text-2xl mt-8`}
  }

  h3 {
    ${tw`text-xl`}
  }

  a {
    ${tw`text-argo-blue-400`}
  }
  p {
    ${tw`text-lg leading-8`}
  }
  strong {
    font-weight: 900;
  }
  blockquote {
    ${tw`ml-6 pl-6 pr-4 py-4 bg-argo-blue-50 rounded-sm border-l-4 border-argo-blue-400 italic`}
  }
  ul > li {
    ${tw`list-inside list-disc`}
  }
  li > strong {
    ${tw`font-bold!`}
  }
`
const PostContent = ({ children }) => (
  <MarkdownStyles>
    <ReactMarkdown
      components={{
        li: ({ node, checked, ordered, children, ...props }) => {
          if (ordered) return <NumberListItem>{children}</NumberListItem>
          return <PlainListItem>{children}</PlainListItem>
        },
      }}
      children={children}
      remarkPlugins={[remarkGfm]}
    />
  </MarkdownStyles>
)

export default PostContent
