import tw, { css } from "twin.macro"

export const swiperNavigationStyles = css`
  & .swiper-button-prev,
  & .swiper-button-next {
    ${tw`bg-white hover:(bg-argo-blue-400) px-4 py-4 w-12 h-12 rounded-full`}
  }
  & .swiper-button-prev:after,
  & .swiper-button-next:after {
    font-size: 1rem;
    ${tw`text-argo-blue-400 font-bold`}
  }
  & .swiper-button-next:hover:after,
  & .swiper-button-prev:hover:after {
    ${tw`text-white`}
  }
`
