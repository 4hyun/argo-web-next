import styled from "styled-components"
import tw from "twin.macro"
import ReactMarkdown from "react-markdown"

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
`
const PostContent = ({ children }) => (
  <MarkdownStyles>
    <ReactMarkdown children={children} />
  </MarkdownStyles>
)

export default PostContent
