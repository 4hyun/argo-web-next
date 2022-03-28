import React from 'react';
import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';
import PaginationItem from '../PaginationItem';
import { usePagination } from '@/hooks/Pagination';

const PaginationRoot = styled.nav``;

const PaginationUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  ${tw`space-x-2`}
`;

const Pagination = React.forwardRef(function Pagination(inProps, ref) {
  const props = inProps;
  const {
    boundaryCount = 1,
    count = 1,
    defaultPage = 1,
    disabled = false,
    onChange,
    siblingCount = 1,
    renderItem = item => <PaginationItem
      {...item} />,
    ...other
  } = props;
  const { items } = usePagination({ ...props });

  return (
    <PaginationRoot
      role="navigation"
      aria-label="Pagination Navigation"
      ref={ref}
      {...other}
    >
      <PaginationUl>
        {items.map((item, i) => (
          <li
            key={i}>{renderItem({ ...item })}</li>
        ))}
      </PaginationUl>
    </PaginationRoot>
  );
});

Pagination.propTypes = {
  onChange: PropTypes.func,
};

export default Pagination;
