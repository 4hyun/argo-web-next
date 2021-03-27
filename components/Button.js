import styled from "styled-components";
import tw from "twin.macro";

const Button = styled.button`
  flex-direction: row;
  align-items: flex-start;
  ${tw`bg-argo-blue-400`};
  font-family: Open sans;
  font-style: normal;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 1.75;
  color: #fff;
`;

export default Button;
