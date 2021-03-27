import React from "react";
import styled from "styled-components";
import RoundedBlueButton from "components/Button";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/* Utils */
const featureParser = (feature) => {
  // TODO: destructure feature by delimiter (colon)
  return feature.split(":");
};

const specialHeadingParser = (heading) =>
  heading.includes("Flex") ? heading.replace(" ", "\n") : heading;

const CardWrapper = styled.div`
  padding: 40px;
  @media (min-width: 1024px) {
    min-width: 225px;
  }
`;

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
    <CardWrapper className="card flex flex-col shadow-lg space-y-5">
      {/* <h6 className="type">Awesome</h6> */}
      <h3 className="heading leading-tight whitespace-pre-line w-full">
        {specialHeadingParser(heading)}
      </h3>
      <ul>
        {featureList.map((featureItem) => (
          <li className="feature-item text-center leading-none">
            {featureItem}
          </li>
        ))}
      </ul>
      <ul className="desc-list font-bold">
        {desc_list.map((desc_item) => (
          <li>{desc_item}</li>
        ))}
      </ul>
      {cta_text && (
        <div className="cta-container flex flex-col flex-grow align-items-end">
          <RoundedBlueButton>{cta_text}</RoundedBlueButton>
        </div>
      )}
    </CardWrapper>
  );
};

const PricingCards = ({ priceModels }) => {
  return (
    <Container className="flex space-x-8 rounded-md">
      {priceModels &&
        priceModels.map((priceData) => {
          return <Card priceData={priceData} />;
        })}
    </Container>
  );
};

export { PricingCards };
