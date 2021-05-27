import React, { useState } from "react"
import tw from "twin.macro"
import { Twirl as TwirlBurger } from "hamburger-react"

const StyledBurger = tw(TwirlBurger)`text-argo-blue-600`

const Hamburger = (props) => {
  const [isActive, setActive] = useState(null)
  const onClick = () => {
    setActive(!isActive)
  }
  // return <TwirlBurger color="#250FAB"></TwirlBurger>
  return <StyledBurger color="#250FAB"></StyledBurger>
}

export default Hamburger
