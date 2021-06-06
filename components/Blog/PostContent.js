import styled from "styled-components"
import tw from "twin.macro"
import ReactMarkdown from "react-markdown"

const MarkdownStyles = styled.div`
  > * {
    ${tw`my-4`}
  }
  h1 {
    ${tw`text-xl font-bold`}
  }

  a {
    ${tw`text-argo-blue-400`}
  }
`
const PostContent = ({ children }) => (
  <MarkdownStyles>
    <ReactMarkdown children={children} />
  </MarkdownStyles>
)

export default PostContent
