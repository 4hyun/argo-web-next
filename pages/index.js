import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import GetInTouchForm from "components/Form";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import ArgoComingSoon from "../public/logos/lettermark/dark.svg";
import { At, Close } from "components/Icons";
import trads from "../translations";
import WaveAnimBg from "components/WaveAnimBg";
import { delay } from "utils/delay";
import { useTranslationsContext } from "contexts/Translations";

const ArgoComingSoonLogo = styled(ArgoComingSoon)`
  --w: 367.63px;
  --h: 158.22px;
  margin-top: 15vh;
  width: calc(var(--h) / 2);
  @media (min-width: 1200px) {
    margin-top: calc(295 / (1024-64) * 100vh);
    height: var(--h);
    width: var(--w);
  }
`;

const ComingSoonMessageContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  @media (min-width: 1200px) {
    /* & > * {
      margin-top: unset;
    } */
    padding: unset;
    height: 338px;
    width: 770px;
  }

  /* left: 335px;
  top: 548px; */
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
    font-size: 60px;
    margin: 0;
    line-height: 66px;
  }
`;

const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > *:not(:first-child) {
    margin-top: 12px;
  }
  width: 100%;
  @media (min-width: 1200px) {
    width: unset;
    & > *:not(:first-child) {
      margin-left: 10px;
      flex-direction: row;
    }
  }
`;

const GetInTouchButton = styled.button`
  flex-direction: row;
  align-items: flex-start;
  background: var(--argo-blue);
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 1.75;
  color: #fff;
  /* text-shadow: 3px 3px 0 #0500ff; */
  @media (min-width: 401px) {
    font-size: 1rem;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

const LearnMoreButton = GetInTouchButton;

const EmailInputWIconWrapper = styled.div`
  /* Auto Layout */
  position: static;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  width: 100%;
  padding: 0 10px;
  @media (min-width: 1200px) {
    & > *:not(:first-child) {
      padding: 10px;
      margin-left: 10px;
    }
  }
`;

const EmailInput = styled.input`
  --w: 506px;
  --h: 31px;
  position: static;
  left: 44px;
  top: 10px;
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  line-height: 31px;
  @media (min-width: 1200px) {
    width: var(--w);
    height: var(--h);
  }
`;

const EmailIcon = styled(At)`
  --w: 31px;
  --h: 24px;
  position: static;
  width: 24px;
  height: 31px;
  left: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.28);
  height: auto;
  width: 0.75rem;
  @media (min-width: 1200px) {
    width: var(--w);
    height: var(--h);
    font-size: 24px;
    line-height: 31px;
  }
`;

const ComingsoonAutoplayFooterMessage = styled.div`
  width: 100%;
  overflow: hidden;
`;

const MobileFormCloseBar = styled.div`
  /* position: absolute; */
  /* subtract px-4 from width */
  width: calc(100%-2rem);
  height: 62px;
  /* TODO: apply padding as tailwindcss */
  padding: 12px 16px;
`;

const buttonActiveClassname =
  "transition-all transform active:translate-x-1 active:translate-y-1";

const buttonClassName = `flex rounded-full py-1 px-6 hover:border-solid border-2 border-transparent hover:border-argo-blue-500 focus:outline-none ${buttonActiveClassname}`;

export default function Home() {
  const [formOpen, openForm] = useState();
  const { lang: locale } = useTranslationsContext();
  const formWrapperClassnames = {
    open: "flex",
    close: "hidden",
    desktop: "md:relative md:flex md:bg-transparent md:w-5/12",
    mobile:
      "form-wrapper absolute left-0 top-0 w-screen h-full flex justify-center px-4 flex-col bg-argo-blue-400",
  };
  const closeForm = () => {
    openForm(false);
  };

  const showForm = () => {
    openForm(true);
  };

  return (
    <div className={styles.container}>
      <main className={`absolute flex items-center w-screen h-full z-10`}>
        {/* <ArgoComingSoonLogo /> */}
        <div className={`flex my-0 mx-auto md:px-8 md:max-w-full`}>
          <ComingSoonMessageContainer className="xl:ml-10 space-y-4 select-none flex flex-col justify-center xl:justify-start">
            <Slogan className="leading-none font-normal">
              {trads[locale]["comingsoon.components.Slogan.tyk"]}
            </Slogan>
            <Heading>
              {trads[locale]["comingsoon.components.Heading.main"]}
            </Heading>
            <CtaMessage className="leading-none font-normal">
              {trads[locale]["comingsoon.components.Slogan.ctamessage"]}
            </CtaMessage>
            {/* <EmailInputContainer>
            <EmailInputWIconWrapper>
              <EmailIcon></EmailIcon>
              <EmailInput
                placeholder={
                  trads[locale][
                    "en.comingsoon.components.EmailInputContainer.placeholder"
                  ]
                }
              ></EmailInput>
            </EmailInputWIconWrapper>
          </EmailInputContainer> */}
            <div className="flex space-x-4 md:space-x-0 mt-2">
              <GetInTouchButton
                className={`${buttonClassName} md:hidden`}
                onClick={delay(showForm, 800)}
              >
                {
                  trads[locale][
                    "comingsoon.components.EmailInputContainer.button.getintouch"
                  ]
                }
              </GetInTouchButton>
              <Link href="https://tyk.io/docs/getting-started/tyk-components/gateway/">
                <a target="_blank">
                  <LearnMoreButton className={`${buttonClassName} md:ml-0`}>
                    {
                      trads[locale][
                        "comingsoon.components.EmailInputContainer.button.learnmoreaboutyk"
                      ]
                    }
                  </LearnMoreButton>
                </a>
              </Link>
            </div>
          </ComingSoonMessageContainer>

          <div
            className={`${formWrapperClassnames.mobile} ${
              formWrapperClassnames.desktop
            } ${
              formOpen
                ? formWrapperClassnames.open
                : formWrapperClassnames.close
            }`}
          >
            <MobileFormCloseBar className="bg-argo-blue-400 md:hidden">
              <Close
                className={`w-8 bg-white float-right cursor-pointer rounded-md transform transition-all ${buttonActiveClassname}`}
                onClick={delay(closeForm)}
              ></Close>
            </MobileFormCloseBar>
            <GetInTouchForm />
          </div>
        </div>
        {/* TODO: ComingsoonAutoplayFooterMessage inside a light Carousel */}
      </main>
      <WaveAnimBg />
    </div>
  );
}
