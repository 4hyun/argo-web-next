import React from "react"
import tw from "twin.macro"
import { Twirl as TwirlBurger } from "hamburger-react"

const StyledBurger = tw(TwirlBurger)`text-argo-blue-600 select-none`

const Hamburger = ({ toggled, toggle, closeMenu }) => {
  return <StyledBurger className="no-tap-highlight" color="#250FAB" toggled={toggled} toggle={toggle}></StyledBurger>
}

export default Hamburger
