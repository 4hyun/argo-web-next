import { Swiper, SwiperSlide } from "./Carousel"
import styled from "styled-components"
import tw from "twin.macro"

// const HomeBlogCarouselSlide = styled(SwiperSlide)``

const StyledSwiper = styled(Swiper)`
  ${tw`h-80 pt-4 pb-8 -mx-8 px-8`}
`

const HomeBlogCarousel = ({ swiperConfig, children }) => {
  return <StyledSwiper {...swiperConfig}>{children}</StyledSwiper>
}

export { HomeBlogCarousel, SwiperSlide as HomeBlogCarouselSlide }
