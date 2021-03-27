import React from "react";
import styled from "styled-components";
import { Check } from "components/Icons";
import RoundedBlueButton from "components/Button";
import tw from "twin.macro";

/* Utils */
const featureParser = (feature) => {
  // TODO: destructure feature by delimiter (colon)
  return feature.split(":");
};

const specialHeadingParser = (heading) => heading.replace(/ /g, "\n");

const GreenCheck = styled(Check)`
  width: 22px;
  color: #04cdb8;
`;

const Container = styled.div`
  ${tw`flex flex-col px-6 xl:px-0 xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8`}
`;

const CardWrapper = styled.div`
  ${tw`flex flex-row xl:flex-col flex-grow shadow-lg xl:space-y-5 p-10 rounded-xl focus:outline-none`}
  & {
    flex-basis: 0;
  }
  @media (min-width: 1024px) {
    min-width: 225px;
  }
`;

const InquireButton = styled(RoundedBlueButton)`
  ${tw`rounded-full text-base focus:outline-none transform transition-all active:translate-x-1 active:translate-y-1`}
`;

const DesktopInquireButtonWrapper = styled.div`
  ${tw`hidden xl:flex flex-col flex-grow items-end`}
`;

const DesktopPriceInquireButton = styled(InquireButton)`
  ${tw`flex w-full justify-center py-3`}
`;

const MobilePriceInquireButton = styled(InquireButton)`
  ${tw`xl:hidden flex-grow-0 w-min px-4 py-2`}
`;

const CardHeadingContainer = styled.div`
  ${tw`flex flex-col flex-grow xl:flex-grow-0 xl:block space-y-4`}
`;
const CardHeading = styled.h3`
  ${tw`leading-tight w-full text-3xl font-black whitespace-pre-line`}
`;

const LicenseFeatureList = ({ featureList, twClasses }) => (
  <ul className={`space-y-0.5 ${twClasses} ff-open-sans text-base`}>
    {featureList.map((featureItem) => (
      <li className="text-center whitespace-pre">{featureItem}</li>
    ))}
  </ul>
);
const DesktopLicenseFeatureList = (props) => <LicenseFeatureList {...props} />;

const Card = ({ priceData }) => {
  const {
    price,
    price_unit,
    heading,
    feature,
    cta_text,
    cta_link,
    desc_list,
  } = priceData;
  const featureList = feature ? featureParser(feature) : null;
  return (
    <CardWrapper>
      {/* <h6 className="type">Awesome</h6> */}
      <CardHeadingContainer>
        <CardHeading>{heading && specialHeadingParser(heading)}</CardHeading>
        <MobilePriceInquireButton>{cta_text}</MobilePriceInquireButton>
      </CardHeadingContainer>
      <DesktopLicenseFeatureList
        featureList={featureList}
        twClasses="hidden xl:block"
      />
      <ul className="desc-list font-bold ml-2 xl:ml-0">
        {desc_list.map((desc_item) => (
          <li className="mb-2 flex items-center space-x-2">
            <GreenCheck size="20" />
            <span>{desc_item}</span>
          </li>
        ))}
      </ul>
      {cta_text && (
        <DesktopInquireButtonWrapper>
          <DesktopPriceInquireButton>{cta_text}</DesktopPriceInquireButton>
        </DesktopInquireButtonWrapper>
      )}
    </CardWrapper>
  );
};

const PricingCards = ({ priceModels }) => {
  return (
    <Container>
      {priceModels &&
        priceModels.map((priceData) => {
          return <Card priceData={priceData} />;
        })}
    </Container>
  );
};

export { PricingCards };
