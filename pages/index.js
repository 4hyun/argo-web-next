import Head from "next/head";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import ArgoComingSoon from "../public/logos/lettermark/light.svg";
import { At } from "components/Icons";
import trads from "../translations";

const ArgoComingSoonLogo = styled(ArgoComingSoon)`
  @media (min-width: 1200px) {
    margin-top: calc(295 / (1024-64) * 100vh);
    height: 158.21981811523438px;
    width: 367.6300964355469px;
  }
`;

const ComingSoonMessageContainer = styled.div`
  @media (min-width: 1200px) {
    height: 338px;
    width: 770px;
  }

  /* left: 335px;
  top: 548px; */
`;

const Slogan = styled.p`
  font-family: Hind Siliguri;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 57px;
  display: flex;
  align-items: center;

  color: #ffffff;

  @media (min-width: 1200px) {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

const Heading = styled.h2`
  font-family: Hind Siliguri;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 66px;
  /* or 110% */

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;

  color: #ffffff;
  @media (min-width: 1200px) {
    margin: 0;
  }
`;

const EmailInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 0px;
  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

const EmailInputSubmit = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 16px;
  background: #ffffff;
  border-radius: 16px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
`;

const EmailInputWIconWrapper = styled.div`
  /* Auto Layout */
  position: static;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  background: #ffffff;
  border-radius: 8px;
  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

const EmailInput = styled.input`
  position: static;
  width: 506px;
  height: 31px;
  left: 44px;
  top: 10px;
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
`;

const EmailIcon = styled(At)`
  position: static;
  width: 24px;
  height: 31px;
  left: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.28);
  height: 31px;
  width: 24px;
`;

const ComingsoonAutoplayFooterMessage = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ArgoComingSoonLogo />
        <ComingSoonMessageContainer>
          <Slogan>{trads.en["comingsoon.components.Slogan.tyk"]}</Slogan>
          <Heading>{trads.en["comingsoon.components.Heading.main"]}</Heading>
          <EmailInputContainer>
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
            <EmailInputSubmit>
              {
                trads.en[
                  "comingsoon.components.EmailInputContainer.button.submit"
                ]
              }
            </EmailInputSubmit>
          </EmailInputContainer>
        </ComingSoonMessageContainer>
        {/* TODO: ComingsoonAutoplayFooterMessage inside a light Carousel */}
      </main>
    </div>
  );
}
