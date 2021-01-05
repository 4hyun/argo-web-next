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
`;

const LearnMoreButton = GetInTouchButton;

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

const buttonClassName = `flex rounded-full py-1 px-4 md:px-6 hover:border-solid border-2 border-transparent hover:border-argo-blue-500 focus:outline-none ${buttonActiveClassname}`;

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
            <div className="coming-soon-action-button-container flex space-x-4 md:space-x-0 mt-5">
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
      </main>
      <WaveAnimBg />
    </div>
  );
}
