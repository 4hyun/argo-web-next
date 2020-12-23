import Head from "next/head";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import ArgoComingSoon from "../public/logos/lettermark/dark.svg";
import { At } from "components/Icons";
import trads from "../translations";
import WaveAnimBg from "components/WaveAnimBg";

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
  & > * {
    margin-top: 12px;
  }
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

const EmailInputSubmit = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background: var(--argo-blue);
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 31px;
  /* border-radius: 8px; */
  /* padding: 0 8px; */
  color: #fff;
  @media (min-width: 1200px) {
    /* padding: 10px 16px; */
    /* border-radius: 16px; */
    font-size: 24px;
  }
`;

const LearnMoreButton = EmailInputSubmit;

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

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <ArgoComingSoonLogo /> */}
        <ComingSoonMessageContainer className="ml-10">
          <Slogan>{trads.en["comingsoon.components.Slogan.tyk"]}</Slogan>
          <Heading>{trads.en["comingsoon.components.Heading.main"]}</Heading>
          <CtaMessage>
            {trads.en["comingsoon.components.Slogan.ctamessage"]}
          </CtaMessage>
          {/* <EmailInputContainer>
            <EmailInputWIconWrapper>
              <EmailIcon></EmailIcon>
              <EmailInput
                placeholder={
                  trads.en[
                    "en.comingsoon.components.EmailInputContainer.placeholder"
                  ]
                }
              ></EmailInput>
            </EmailInputWIconWrapper>
          </EmailInputContainer> */}
          <div className="flex space-x-4 mt-2">
            <EmailInputSubmit className="rounded-3xl py-2 px-6">
              {
                trads.en[
                  "comingsoon.components.EmailInputContainer.button.getintouch"
                ]
              }
            </EmailInputSubmit>
            <LearnMoreButton className="rounded-3xl py-2 px-6">
              {
                trads.en[
                  "comingsoon.components.EmailInputContainer.button.learnmoreaboutyk"
                ]
              }
            </LearnMoreButton>
          </div>
        </ComingSoonMessageContainer>
        {/* TODO: ComingsoonAutoplayFooterMessage inside a light Carousel */}
      </main>
      <WaveAnimBg />
    </div>
  );
}
