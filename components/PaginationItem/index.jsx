import React from 'react';
import tw, { styled } from 'twin.macro';
import {
  FirstPage,
  LastPage,
  NavigateNext,
  NavigateBefore,
} from '@/components/Icons';

const PaginationItemEllipsis = styled.div`
  display: flex;
  ${tw`font-bold tracking-widest`}
`;

const PaginationItemPageIcon = styled.div``;

const PaginationItemPage = styled.div`
  width: 2rem;
  height: 2rem;
  ${tw`flex justify-center items-center text-white bg-argo-blue-50 rounded-md hover:cursor-pointer font-bold`}
  ${({ selected }) => selected && tw`ring ring-4 bg-argo-blue-400`}
`;

const PaginationItem = React.forwardRef(function PaginationItem(inProps, ref) {
  const props = inProps;

  const {
    // component,
    components = {
      first: FirstPage,
      last: LastPage,
      next: NavigateNext,
      previous: NavigateBefore,
    },
    disabled,
    page,
    type = 'page',
    ...other
  } = props;

  const normalizedIcons = {
    previous: components.previous || NavigateBefore,
    next: components.next || NavigateNext,
    first: components.first || FirstPage,
    last: components.last || LastPage,
  };

  const Icon = normalizedIcons[type];

  return type === 'start-ellipsis' || type === 'end-ellipsis' ? (
    <PaginationItemEllipsis
      ref={ref}
      // ownerState={ownerState}
      // className={clsx(classes.root, className)}
    >
      …
    </PaginationItemEllipsis>
  ) : (
    <PaginationItemPage
      ref={ref}
      // ownerState={ownerState}
      // component={component}
      disabled={disabled}
      // className={clsx(classes.root, className)}
      {...other}
    >
      {type === 'page' && page}
      {Icon ? (
        <PaginationItemPageIcon
          as={Icon}
          // ownerState={ownerState}
          // className={classes.icon}
        />
      ) : null}
    </PaginationItemPage>
  );
});
export default PaginationItem;
