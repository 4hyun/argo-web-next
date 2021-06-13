import { useState, useMemo } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import styles from "../styles/Home.module.css"
import trads from "../translations"
/* components */
import { HomeBlogCarousel, HomeBlogCarouselSlide } from "components/Carousel"
import GetInTouchForm from "components/Form"
import ScrollTopButton from "components/ScrollTopButton"
import { Close } from "components/Icons"
import Button from "components/Button"
import WaveAnimBg from "components/WaveAnimBg"
import { delay } from "lib/delay"
import { useTranslationsContext } from "contexts/Translations"
import PriceInfo from "components/PriceInfo"
import { PostList, BlogCard } from "components/Blog"
/* lib */
import { fetchStrapi, queryList } from "lib/api/strapi"

const homeBlogCarouselConfig = {
  slidesPerView: 1,
  spaceBetween: 8,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
}

const CloseButton = styled(Close)`
  ${tw`w-8 h-8 bg-white float-right cursor-pointer rounded-md transition-all transform active:translate-x-1 active:translate-y-1`}
`

const ComingSoonMessageContainer = styled.div`
  ${tw`xl:ml-10 select-none flex flex-col justify-center xl:justify-start xl:mr-4`}
  width: 90%;
  padding: 0 1rem;
  margin: 0 auto;
  @media (min-width: 400px) {
    width: 85%;
  }
  @media (min-width: 1200px) {
    padding: unset;
    height: 338px;
  }
`

const Slogan = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: #111;
  ${tw`leading-none font-normal mt-4`}
  @media (min-width: 1200px) {
    line-height: 57px;
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 24px;
  }
`

const CtaMessage = styled(Slogan)`
  @media (min-width: 1200px) {
    margin-top: 0;
  }
`

const Heading = styled.h2`
  ${tw`mt-4`}
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 1.75rem;
  line-height: 1;
  /* or 110% */

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  text-shadow: 0px 0px 20px white;

  color: #111;
  @media (min-width: 1200px) {
    font-size: 48px;
    margin: 0;
    line-height: 56px;
  }
`

const StyledButton = styled(Button)`
  ${tw`flex rounded-full py-2 px-4 md:px-6 md:ml-0 hover:border-solid border-2 border-transparent focus:outline-none whitespace-nowrap transition-all transform active:translate-x-1 active:translate-y-1`}
  @media (min-width: 401px) {
    font-size: 1rem;
  }
`

const GetInTouchButton = styled(StyledButton)`
  ${tw`lg:hidden`}
`

const LearnMoreButton = styled(StyledButton)``

const MobileFormCloseBar = styled.div`
  ${tw`flex justify-between bg-argo-blue-400 lg:hidden py-3 px-4`}
  height: 62px;
`

const SectionHeading = styled.h2`
  ${tw`leading-tight w-full text-4xl font-black whitespace-pre-line mb-10 text-center`}
`

const PricingSectionWrapper = styled.div`
  ${tw`flex flex-col container mx-auto md:px-12 md:max-w-full`}
`
const PricingSection = styled.div`
  ${tw`flex my-0 mx-auto justify-center relative h-3/6 pt-4`}
  min-height: 500px;
  margin-bottom: 200px;
`

const BlogCardWrapper = styled.div`
  ${tw`rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transform w-full h-full`}
`

const LatestPostSection = styled.div`
  ${tw`container mx-auto px-6 mb-20`}
`

const FormWrapper = styled.div(({ formOpen }) => [
  tw`lg:relative lg:flex lg:bg-transparent lg:w-5/12 `,
  tw`fixed inset-0 w-screen h-full flex justify-center px-4 flex-col bg-argo-blue-400`,
  formOpen && tw`flex`,
  !formOpen && tw`hidden`,
])

const HomePage = (props) => {
  const { priceList, latestPosts } = props
  const priceListMap = useMemo(() => priceList.reduce((acc, cur) => (acc[cur.id] = cur.heading) && acc, {}))
  const [inquiryItems, setInquiryItems] = useState([])
  const [formOpen, openForm] = useState()
  // const [bgCanvasLoaded, setBgCanvasLoaded] = useState();
  const {
    lang: { locale },
  } = useTranslationsContext()

  const closeForm = () => {
    openForm(false)
  }

  const showForm = () => {
    openForm(true)
  }

  const removeInquiryItem = (inquiryItemId) => {
    if (inquiryItemId === "all") {
      setInquiryItems([])
      return
    }
    inquiryItems.includes(inquiryItemId) &&
      setInquiryItems((prevState) => {
        prevState.splice(inquiryItemId.indexOf(inquiryItemId, 1))
        console.log("prevState after delete : ", prevState)
        return [...prevState]
      })
  }

  const addInquiryItem = (inquiryItemId) => {
    console.log(!!inquiryItems.includes(inquiryItemId))
    if (inquiryItems.includes(inquiryItemId)) return
    setInquiryItems((prevState) => [...prevState, inquiryItemId])
  }

  return (
    <>
      <div className={styles.container}>
        <main className={`absolute flex items-center w-screen h-full z-10`}>
          <div className={`flex my-0 mx-auto md:px-8 md:max-w-full justify-center`}>
            <ComingSoonMessageContainer>
              <Slogan>{trads[locale]["comingsoon.components.Slogan.tyk"]}</Slogan>
              <Heading>{trads[locale]["comingsoon.components.Heading.main"]}</Heading>
              <CtaMessage className="leading-none font-normal mt-4">{trads[locale]["comingsoon.components.Slogan.ctamessage"]}</CtaMessage>
              <div className="coming-soon-action-button-container flex space-x-4 lg:space-x-0 mt-5">
                <GetInTouchButton onClick={delay(showForm, 800)} aria-label="Inquire about Tyk API Gateway">
                  {trads[locale]["comingsoon.components.EmailInputContainer.button.getintouch"]}
                </GetInTouchButton>
                <a href="https://tyk.io/docs/getting-started/tyk-components/gateway/" target="_blank">
                  <LearnMoreButton aria-label="Learn More about Tyk API Gateway">
                    {trads[locale]["comingsoon.components.EmailInputContainer.button.learnmoreaboutyk"]}
                  </LearnMoreButton>
                </a>
              </div>
            </ComingSoonMessageContainer>
            <FormWrapper formOpen={formOpen}>
              <MobileFormCloseBar>
                <div className="text-white text-lg ff-open-sans font-bold ">Let's get in touch</div>
                <CloseButton onClick={delay(closeForm, 800)}></CloseButton>
              </MobileFormCloseBar>
              <GetInTouchForm inquiryItems={inquiryItems} removeInquiryItem={removeInquiryItem} priceListMap={priceListMap} closeForm={closeForm} />
            </FormWrapper>
          </div>
        </main>
        {/* {bgCanvasLoaded && <WaveAnimBg />} */}
        <WaveAnimBg />
      </div>
      <PricingSectionWrapper>
        <SectionHeading id="tyk-pricing">Tyk Pricing</SectionHeading>
        <PricingSection>
          <PriceInfo priceList={priceList} addInquiryItem={addInquiryItem} removeInquiryItem={removeInquiryItem} showForm={showForm}></PriceInfo>
        </PricingSection>
      </PricingSectionWrapper>
      <LatestPostSection className="latestposts">
        <SectionHeading id="latest-posts">Latest Posts</SectionHeading>
        {/* <PostList tw="space-x-4"> */}
        <HomeBlogCarousel swiperConfig={homeBlogCarouselConfig}>
          {latestPosts.map((blogProps) => (
            <HomeBlogCarouselSlide key={blogProps.id}>
              <BlogCard {...blogProps} wrapper={BlogCardWrapper} />
            </HomeBlogCarouselSlide>
          ))}
        </HomeBlogCarousel>

        {/* </PostList> */}
      </LatestPostSection>
      <ScrollTopButton />
    </>
  )
}

export async function getStaticProps() {
  const { getLatestPosts, getPriceList } = queryList
  const latestPostsRes = await fetchStrapi(getLatestPosts.url)
  const priceListRes = await fetchStrapi(getPriceList.url)
  const latestPosts = await latestPostsRes.json()
  const priceList = await priceListRes.json()
  const props = {
    priceList,
    latestPosts,
  }
  return {
    props,
  }
}

export default HomePage
