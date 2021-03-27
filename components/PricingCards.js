import React from "react";
import styled from "styled-components";
import { Check } from "components/Icons";
import RoundedBlueButton from "components/Button";
import tw from "twin.macro";
import { scroll, animateScroll } from "react-scroll";

/* Utils */
const featureParser = (feature) => {
  // TODO: destructure feature by delimiter (colon)
  return feature.split(":");
};

const specialHeadingParser = (heading) => heading.replace(/ /g, "\n");

const GreenCheckWrapper = styled.div`
  width: 22px;
  height: 22px;
  max-width: 22px;
  max-height: 22px;
`;
const GreenCheck = styled(Check)`
  color: #04cdb8;
`;

const Container = styled.div`
  ${tw`flex flex-col px-6 xl:px-0 xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8`}
  @media (max-width: 1024px) {
    & {
      justify-content: space-between;
    }
  }
`;

const CardWrapper = styled.div`
  ${tw`flex flex-row xl:flex-col flex-grow shadow-lg xl:space-y-5 px-8 xl:px-10 py-10 rounded-xl focus:outline-none`}
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
  ${tw`flex flex-col flex-grow xl:flex-grow-0 xl:block space-y-3`}
`;
const CardHeading = styled.h3`
  ${tw`leading-tight w-full text-3xl font-black whitespace-pre-line`}
`;

const LicenseFeatureHighlightList = ({ featureList, twClasses }) => (
  <ul className={`space-y-0.5 ${twClasses} ff-open-sans text-base`}>
    {featureList.map((featureItem, i) => (
      <li className="text-center whitespace-pre" key={i}>
        {featureItem}
      </li>
    ))}
  </ul>
);
const DesktopLicenseFeatureHighlightList = (props) => (
  <LicenseFeatureHighlightList {...props} />
);

const AllFeatureList = styled.ul`
  ${tw`font-bold ml-2 xl:ml-0`}
`;
const FeatureItem = styled.li`
  ${tw`mb-2 flex items-center space-x-2`}
`;
const scrollToTop = () => animateScroll.scrollToTop();
const Card = ({ priceData, addInquiryItem, removeInquiryItem }) => {
  const {
    id,
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
      <DesktopLicenseFeatureHighlightList
        featureList={featureList}
        twClasses="hidden xl:block"
      />
      <AllFeatureList>
        {desc_list.map((desc_item, i) => (
          <FeatureItem key={i}>
            <GreenCheckWrapper>
              <GreenCheck size={20} />
            </GreenCheckWrapper>
            <span>{desc_item}</span>
          </FeatureItem>
        ))}
      </AllFeatureList>
      {cta_text && (
        <DesktopInquireButtonWrapper>
          <DesktopPriceInquireButton
            onClick={() => {
              addInquiryItem(id);
              scrollToTop();
            }}
          >
            {cta_text}
          </DesktopPriceInquireButton>
        </DesktopInquireButtonWrapper>
      )}
    </CardWrapper>
  );
};

const PricingCards = ({ priceModels, addInquiryItem, removeInquiryItem }) => {
  return (
    <Container>
      {priceModels &&
        priceModels.map((priceData, i) => {
          return (
            <Card
              key={i}
              priceData={priceData}
              addInquiryItem={addInquiryItem}
              removeInquiryItem={removeInquiryItem}
            />
          );
        })}
    </Container>
  );
};

export { PricingCards };
