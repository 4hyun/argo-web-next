import tw, { styled } from "twin.macro"

const LangButton = styled.span`
  padding: 0 0.5rem;
  cursor: pointer;
  min-width: 45px;
  font-weight: 600;
  transition: all 0.1s ease;
  text-align: center;
  line-height: 0.8;
  :hover,
  & > .lang-button.active {
    /* line-height: 120%; */
    color: var(--argo-blue);
    font-weight: 900;
    transition: all 0.1s ease;
  }
  :first-child {
    border-right: 1.5px solid #333;
  }
  @media (min-width: 1200px) {
    min-width: 55px;
  }
`

export default LangButton
