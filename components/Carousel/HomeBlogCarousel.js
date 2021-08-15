import { Swiper, SwiperSlide } from "./Carousel"
import styled from "styled-components"
import tw from "twin.macro"
import { CARD_CLASSNAME } from "components/Blog/Card"

const StyledSwiper = styled(Swiper)`
  ${tw`h-80 pt-4 pb-8 -mx-8 px-8`}
  ${`${CARD_CLASSNAME}`} {
    ${tw`text-gray-900`}
  }
  ${`${CARD_CLASSNAME}.hovered`} {
    ${tw`duration-200 bg-gray-100`}
  }
`

const HomeBlogCarousel = ({ swiperConfig, children }) => {
  return <StyledSwiper {...swiperConfig}>{children}</StyledSwiper>
}

export { HomeBlogCarousel, SwiperSlide as HomeBlogCarouselSlide }
