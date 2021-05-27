import tw, { styled } from "twin.macro"
/* components */
import { UpArrowCircle } from "components/Icons"
/* hook */
import { useScrollPosition } from "@/hooks/useScrollPosition"
/* utils */
import { animateScroll } from "react-scroll"

const Button = styled.button`
  ${tw`rounded-full bg-argo-blue-400 text-white fixed right-9 bottom-12 flex justify-center items-center md:(right-24 bottom-28) lg:(right-32 bottom-40) focus:outline-none shadow-xl transform active:(translate-x-1 translate-y-1) transition-opacity`}
  ${({ scrollY }) => (scrollY > 300 ? tw`opacity-100` : tw`opacity-0`)}
`

const scrollOptions = { duration: 250 }
const scrollToTop = () => animateScroll.scrollToTop(scrollOptions)

const ScrollTopButton = () => {
  const scrollY = useScrollPosition(60)
  return (
    <Button onClick={scrollToTop} scrollY={scrollY}>
      <UpArrowCircle size={60} />
    </Button>
  )
}

export default ScrollTopButton
