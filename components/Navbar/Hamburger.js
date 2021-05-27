import React, { useState } from "react";
import styled from "styled-components";
import {Twirl as TwirlBurger} from 'hamburger-react'

const Button = styled.button`
  cursor: pointer;
  border: 0;
  margin: 0;
  overflow: visible;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  ${(props) =>
    (props.isActive &&
      `& > div > div {
    /* transform: scaleX(0); */
    background-color: transparent;
  }
  & > div > div:after {
    transform: translateX(3.25px) rotate(35deg);
  }
  & > div > div:before {
    transform: translateX(3.25px) rotate(-35deg);
    
  }`) ||
    ""}
  @media(min-width: 1200px) {
    padding: 0 2rem;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  width: 36px;
  height: 36px;
`;

const Line = styled.div`
  position: absolute;
  display: block;
  width: inherit;
  --h: 3px;
  /* --dark-blue: #333; */
  --dark-blue: #0a29ca;
  height: var(--h);
  left: 0;
  top: 50%;
  margin-top: calc(var(--h) / -2);
  background-color: var(--dark-blue);
  transition: background-color 0.1s ease-in;
  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: var(--h);
    left: 0;
    background-color: var(--dark-blue);
    transition: transform 0.15s ease-in;
    transform-origin: left;
  }
  &:after {
    top: -10px;
  }
  &:before {
    bottom: -10px;
  }
`;

function Hamburger(props) {
  const [isActive, setActive] = useState(null);
  const onClick = () => {
    setActive(!isActive);
  };
  return (
    // <Button className="select-none" isActive={isActive} onClick={onClick}>
    //   <Box>
    //     <Line />
    //   </Box>
    // </Button>
<TwirlBurger></TwirlBurger>
  );
}

export default Hamburger;
