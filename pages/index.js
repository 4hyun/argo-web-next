import { useState, useMemo, useEffect } from "react"
import styled from "styled-components"
import tw from "twin.macro"
/* components */
import Container from "containers/HomePage/Container"
import ComingSoonMessage from "components/HomePage/ComingSoonMessage"
import LayoutTopGradientOverlay from "components/HomePage/LayoutTopGradientOverlay"
import { HomeBlogCarousel, HomeBlogCarouselSlide } from "components/Carousel"
import GetInTouchForm from "@/components/Form"
import ScrollTopButton from "components/ScrollTopButton"
import { Close } from "components/Icons"
import WaveAnimBg from "@/components/WaveAnimBg"
import { delay } from "lib/delay"
import { useTranslationsContext } from "contexts/Translations"
import PriceInfoList from "components/PriceInfoList"
import { PostList, BlogCard } from "components/Blog"
import HomeBlogTags from "containers/HomeBlogTags/index"
/* lib */
import { fetchStrapi, paths, getStrapiAuthToken } from "lib/api/strapi"
/* styles */
import { swiperNavigationStyles } from "containers/HomePage/styles"

const homeBlogCarouselConfig = {
  navigation: true,
  slidesPerView: 1,
  spaceBetween: 8,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
}

const MobileFormCloseIcon = styled(Close)`
  ${tw`w-8 h-8 p-1.5 text-gray-50 fill-current float-right cursor-pointer`}
`
const MobileFormCloseBarMessage = styled.div`
  ${tw`flex items-center text-gray-50 text-lg font-poppins font-bold pl-2`}
`
const MobileFormCloseBar = styled.div`
  ${tw`flex justify-between items-center bg-argo-blue-400 py-1 px-4 rounded-t-2xl lg:hidden!`}
  height: 52px;
`
const FormContainer = styled.div(({ formOpen }) => [
  tw`lg:relative lg:flex lg:bg-transparent lg:w-5/12`,
  tw`fixed inset-0 w-screen h-full flex justify-center px-4 flex-col bg-gradient-to-b from-white to-argo-blue-400 lg:(bg-none rounded-2xl)`,
  formOpen && tw`flex`,
  !formOpen && tw`hidden`,
])

const SectionHeading = styled.h2`
  font-size: 1.75rem;
  ${tw`leading-tight w-full md:(text-3xl) font-black whitespace-pre-line mb-6 text-center`}
  @media screen (min-width: 1200px) {
    ${tw`mb-10`}
  }
`

const PricingSectionWrapper = styled.div`
  ${tw`flex flex-col container mx-auto md:px-12 md:max-w-full`}
`
const PricingSection = styled.div`
  ${tw`flex px-5 max-w-full sm:(px-0 max-w-max) my-0 mx-auto justify-center relative h-3/6 pt-4`}
  min-height: 500px;
  margin-bottom: 200px;
  @media screen (min-width: 1200px) {
    transform: scale(0.85);
  }
`

const BlogPostCardWrapper = styled.div`
  ${tw`flex flex-col justify-between p-6`}
  ${tw`rounded-lg bg-white hover:(bg-argo-blue-400 text-white)! transform w-full h-full flex-1 transition-none`}
  ${tw`border-2`}
`

const LatestBlogPostSection = styled.div`
  ${tw`container mx-auto px-6 mb-20 max-w-screen-xl!`}
`

const HomePage = ({ priceList, latestPosts, tagsList }) => {
  const priceListMap = useMemo(() => priceList.reduce((acc, cur) => (acc[cur.id] = cur.heading) && acc, {}), [priceList])
  const [inquiryItems, setInquiryItems] = useState([])
  const [formOpen, openForm] = useState()
  // const [bgCanvasLoaded, setBgCanvasLoaded] = useState();
  const {
    currentLocaleData: { locale },
  } = useTranslationsContext()

  const authorInfoConfig = {
    showAuthorLabel: true,
    showDate: true,
  }

  const closeForm = () => {
    openForm(false)
  }

  const showForm = () => {
    openForm(true)
  }

  const handleGetInTouchButtonClick = delay(showForm, 800)

  const removeInquiryItem = (inquiryItemId) => {
    if (inquiryItemId === "all") {
      setInquiryItems([])
      return
    }
    inquiryItems.includes(inquiryItemId) &&
      setInquiryItems((prevState) => {
        prevState.splice(inquiryItemId.indexOf(inquiryItemId, 1))
        return [...prevState]
      })
  }

  const addInquiryItem = (inquiryItemId) => {
    if (inquiryItems.includes(inquiryItemId)) return
    setInquiryItems((prevState) => [...prevState, inquiryItemId])
  }

  return (
    <>
      <Container>
        {!formOpen && <LayoutTopGradientOverlay />}
        <main
          className={`absolute flex items-center w-screen h-full z-10`}>
          <div
            className={`flex my-0 mx-auto md:px-8 md:max-w-full justify-center`}>
            <ComingSoonMessage
              locale={locale}
              handleGetInTouchButtonClick={handleGetInTouchButtonClick} />
            <FormContainer
              formOpen={formOpen}>
              <MobileFormCloseBar>
                <MobileFormCloseBarMessage>{`Let's get in touch`}</MobileFormCloseBarMessage>

                <MobileFormCloseIcon
                  onClick={delay(closeForm, 800)}></MobileFormCloseIcon>
              </MobileFormCloseBar>

              <GetInTouchForm
                inquiryItems={inquiryItems}
                removeInquiryItem={removeInquiryItem}
                priceListMap={priceListMap}
                closeForm={closeForm} />
            </FormContainer>
          </div>
        </main>
        {/* {bgCanvasLoaded && <WaveAnimBg />} */}
        <WaveAnimBg />
      </Container>

      <LatestBlogPostSection
        className="latestposts"
        css={[swiperNavigationStyles]}>
        <SectionHeading
          id="latest-posts">Latest Posts</SectionHeading>
        {/* <HomeBlogTags tagsList={tagsList} /> */}
        <HomeBlogCarousel
          swiperConfig={homeBlogCarouselConfig}>
          {latestPosts.map((blogProps) => (
            <HomeBlogCarouselSlide
              key={blogProps.id}>
              <BlogCard
                {...blogProps}
                wrapper={BlogPostCardWrapper}
                authorInfoConfig={authorInfoConfig} />
            </HomeBlogCarouselSlide>
          ))}
        </HomeBlogCarousel>
        {/* </PostList> */}
      </LatestBlogPostSection>

      <PricingSectionWrapper>
        <SectionHeading
          id="tyk-pricing">
          Tyk API Gateway
          <br /> Licenses
        </SectionHeading>

        <PricingSection>
          <PriceInfoList
            priceList={priceList}
            addInquiryItem={addInquiryItem}
            removeInquiryItem={removeInquiryItem}
            showForm={showForm}
          ></PriceInfoList>
        </PricingSection>
      </PricingSectionWrapper>

      <ScrollTopButton />
    </>
  )
}

export async function getStaticProps() {
  // const strapiUser = { identifier: process.env.STRAPI_ID, password: process.env.STRAPI_PW }
  // const token = await getStrapiAuthToken(strapiUser, process.env.NODE_ENV, process.env.DEV_STRAPI_AUTH)
  const { Posts, Price, Homepage } = resources
  const latestPostsRes = await fetchStrapi(Posts.methods.Latest.url)
  const priceListRes = await fetchStrapi(Price.methods.List.url)
  const homePageDataRes = await fetchStrapi(Homepage.methods.Get.url)
  const latestPosts = await latestPostsRes.json()
  const priceList = await priceListRes.json()
  const homePageData = await homePageDataRes.json()
  const tagsList = homePageData.home_blog_tags
  const props = {
    priceList,
    latestPosts,
    tagsList,
  }
  return {
    props,
  }
}

export default HomePage
