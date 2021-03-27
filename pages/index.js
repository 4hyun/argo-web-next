import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import GetInTouchForm from "components/Form";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import ArgoComingSoon from "../public/logos/lettermark/dark.svg";
import { At, Close } from "components/Icons";
import trads from "../translations";
import Button from "components/Button";
import WaveAnimBg from "components/WaveAnimBg";
import { delay, delayed } from "utils/delay";
import { useTranslationsContext } from "contexts/Translations";
import { PricingCards } from "components/PricingCards";
import { fetchStrapi } from "configs";
import tw from "twin.macro";

const ComingSoonMessageContainer = styled.div`
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
`;

const Slogan = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: #111;
  @media (min-width: 1200px) {
    line-height: 57px;
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 24px;
  }
`;

const CtaMessage = styled(Slogan)`
  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;

const Heading = styled.h2`
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
`;

const StyledButton = styled(Button)`
  ${tw`flex rounded-full py-2 px-4 md:px-6 md:ml-0 hover:border-solid border-2 border-transparent focus:outline-none whitespace-nowrap transition-all transform active:translate-x-1 active:translate-y-1`}
  @media (min-width: 401px) {
    font-size: 1rem;
  }
`;

const GetInTouchButton = styled(StyledButton)`
  ${tw`lg:hidden`}
`;

const LearnMoreButton = styled(StyledButton)``;

const MobileFormCloseBar = styled.div`
  ${tw`bg-argo-blue-400 lg:hidden py-3 px-4`}
  height: 62px;
`;

const PricingSection = styled.div`
  min-height: 500px;
  margin-bottom: 200px;
`;

const FormWrapper = styled.div(({ formOpen }) => [
  tw`lg:relative lg:flex lg:bg-transparent lg:w-5/12 `,
  tw`absolute left-0 top-0 w-screen h-full flex justify-center px-4 flex-col bg-argo-blue-400`,
  formOpen && tw`flex`,
  !formOpen && tw`hidden`,
]);

export default function Home(props) {
  const { priceModels } = props;
  console.log("priceModels : ", priceModels);
  const [formOpen, openForm] = useState();
  // const [bgCanvasLoaded, setBgCanvasLoaded] = useState();
  const {
    lang: { locale },
  } = useTranslationsContext();

  const closeForm = () => {
    console.log("closeForm");
    openForm(false);
  };

  const showForm = () => {
    console.log("showForm");
    openForm(true);
  };

  /* Load canvas once the component mounted */
  // useEffect(() => {
  //   delayed(() => setBgCanvasLoaded(true), 4000);
  // }, []);

  return (
    <>
      <div className={styles.container}>
        <main className={`absolute flex items-center w-screen h-full z-10`}>
          <div
            className={`flex my-0 mx-auto md:px-8 md:max-w-full justify-center`}
          >
            <ComingSoonMessageContainer className="xl:ml-10 select-none flex flex-col justify-center xl:justify-start xl:mr-4">
              <Slogan className="leading-none font-normal mt-4">
                {trads[locale]["comingsoon.components.Slogan.tyk"]}
              </Slogan>
              <Heading className="mt-4">
                {trads[locale]["comingsoon.components.Heading.main"]}
              </Heading>
              <CtaMessage className="leading-none font-normal mt-4">
                {trads[locale]["comingsoon.components.Slogan.ctamessage"]}
              </CtaMessage>
              <div className="coming-soon-action-button-container flex space-x-4 lg:space-x-0 mt-5">
                <GetInTouchButton
                  onClick={delay(showForm, 800)}
                  aria-label="Inquire about Tyk API Gateway"
                >
                  {
                    trads[locale][
                      "comingsoon.components.EmailInputContainer.button.getintouch"
                    ]
                  }
                </GetInTouchButton>
                <a
                  href="https://tyk.io/docs/getting-started/tyk-components/gateway/"
                  target="_blank"
                >
                  <LearnMoreButton aria-label="Learn More about Tyk API Gateway">
                    {
                      trads[locale][
                        "comingsoon.components.EmailInputContainer.button.learnmoreaboutyk"
                      ]
                    }
                  </LearnMoreButton>
                </a>
              </div>
            </ComingSoonMessageContainer>
            <FormWrapper formOpen={formOpen}>
              <MobileFormCloseBar>
                <Close
                  className={`w-8 bg-white float-right cursor-pointer rounded-md transition-all transform active:translate-x-1 active:translate-y-1`}
                  onClick={delay(closeForm, 800)}
                ></Close>
              </MobileFormCloseBar>
              <GetInTouchForm />
            </FormWrapper>
          </div>
        </main>
        {/* {bgCanvasLoaded && <WaveAnimBg />} */}
        <WaveAnimBg />
      </div>
      <PricingSection
        className={`flex my-0 mx-auto md:px-12 md:max-w-full justify-center relative h-3/6`}
      >
        <PricingCards priceModels={priceModels}></PricingCards>
      </PricingSection>
    </>
  );
}

export async function getStaticProps() {
  const path = "/price-models";
  const res = await fetchStrapi(path);
  const priceModels = await res.json();

  return {
    props: {
      priceModels,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}
