import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';
/* components */
import A from './A';
/* styles */
import {
  hoverShadowRainbowCss,
  hoverShadowBlueCss,
  hoverShadowLemonCss,
  hoverShadowPileCss,
  hoverShadowPileShallowCss,
} from './styles';

const H2 = styled.h2`
  ${tw`text-xl font-black mb-3 leading-normal`}
`;

const AuthorLabel = styled.p`
  ${tw`text-xs`}
`;
const PublishedAt = styled.span`
  ${tw`text-xs`}
`;

const AuthorInfoContainer = styled.div`
  ${tw`flex flex-col`}
`;

const HOVERED = 'hovered';
const HOVERED_ACTIVE = 'hovered-active';

const Wrapper = styled.article`
  ${tw`rounded-lg p-6 transform w-full transition-transform border-2`}
  transition-duration: unset;

  ${AuthorLabel},${PublishedAt} {
    ${tw`leading-none`}
  }
  &:hover {
    ${hoverShadowPileShallowCss}
  }

  &.hovered-active {
    ${tw`translate-y-1`}
  }
`;

const CLASSNAME = 'blogcard';
export const CARD_CLASSNAME = '.' + CLASSNAME;

const Card = ({
  id,
  title,
  content,
  firstname,
  lastname,
  email,
  published_at,
  slug,
  wrapper = Wrapper,
  authorInfoConfig,
}) => {
  const Wrapper = wrapper;
  const [cardHoverClass, setCardHoverClass] = useState(null);
  const handleCardHovered = () => setCardHoverClass(HOVERED);
  const handleCardMouseLeave = () => setCardHoverClass(null);
  const handleCardHoverActive = () => setCardHoverClass(HOVERED_ACTIVE);
  const postDate = new Date(published_at);
  return (
    <Link
      href={`blog/post/${slug}`}
      passHref>
      <A>
        <Wrapper
          cardHoverClass={cardHoverClass}
          className={`${CLASSNAME} ${cardHoverClass && cardHoverClass}`}
          onMouseEnter={handleCardHovered}
          onMouseLeave={handleCardMouseLeave}
          onMouseDown={handleCardHoverActive}
        >
          <H2>{title}</H2>
          {/* <div>{content}</div> */}
          {authorInfoConfig && (
            <AuthorInfoContainer>
              {authorInfoConfig.showAuthorLabel && (
                <AuthorLabel>{`by ${firstname} ${lastname}`}</AuthorLabel>
              )}
              {authorInfoConfig.showDate && (
                <PublishedAt>
                  {postDate.toLocaleDateString('ko-KR').slice(0, -1)}
                </PublishedAt>
              )}
            </AuthorInfoContainer>
          )}
        </Wrapper>
      </A>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  authorInfoConfig: PropTypes.shape({
    showAuthorLabel: PropTypes.bool,
    showDate: PropTypes.bool,
  }),
};
