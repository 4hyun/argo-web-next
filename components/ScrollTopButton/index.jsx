import tw, { styled } from "twin.macro"
/* components */
import { UpArrowCircle } from "components/Icons"
/* hook */
import { useScrollPosition } from "@/hooks/useScrollPosition"
import useScrollDirection from "@/hooks/useScrollDirection"
/* utils */
import { animateScroll } from "react-scroll"
/* contexts */
import { SCROLL_UP, SCROLL_DOWN } from "@/contexts/ScrollDirectionContext"

const Button = styled.button`
  ${tw`rounded-full bg-argo-blue-400 text-white fixed right-7 bottom-6 flex justify-center items-center md:(right-24 bottom-28) lg:(right-10 bottom-9) focus:outline-none shadow-xl transform transition-transform hover:(scale-90) active:(translate-x-1 translate-y-1 scale-75) transition-opacity scale-75 z-50`}
  ${({ scrollY, scrollDir }) => (scrollY > 500 && scrollDir === SCROLL_DOWN ? tw`opacity-100` : tw`opacity-0`)}
`

const scrollOptions = { duration: 250 }
const scrollToTop = () => animateScroll.scrollToTop(scrollOptions)

const ScrollTopButton = () => {
  const scrollDir = useScrollDirection()
  const scrollY = useScrollPosition(60)
  return (
    <Button
      onClick={scrollToTop}
      scrollY={scrollY}
      scrollDir={scrollDir}>
      <UpArrowCircle
        size={60} />
    </Button>
  )
}

export default ScrollTopButton
