import usePageState from './usePageState';

// mui - usePagination
const usePagination = (props = {}) => {
  const {
    boundaryCount = 1,
    count = 1,
    defaultPage = 1,
    disabled = false,
    onChange: handleChange,
    page: pageProp,
    siblingCount = 1,
  } = props;

  const [page, setPageValue] = usePageState({ pageProp, defaultPage });

  const handleClick = (event, value) => {
    if (!pageProp) {
      setPageValue(value);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };

  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count,
  );

  /* TODO: learn how this works */
  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount, // (eg. page=9, siblingCount =1, count =10, then result = 8)
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1, // result = 6
    ),
    // Greater than startPages
    boundaryCount + 2, // result = 3
  ); // result = 6

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2,
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1,
  );
  /* TODO: learn how this works [END]*/

  // Map the button type to its page number
  const buttonPage = type => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  const itemList = [
    ...startPages, // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['end-ellipsis']
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),
    ...endPages,
  ];

  const items = itemList.map(item => {
    return typeof item === 'number'
      ? {
          onClick: event => {
            handleClick(event, item);
          },
          type: 'page',
          page: item,
          selected: item === (pageProp ? pageProp : page),
          disabled,
          'aria-current':
            item === (pageProp ? pageProp : page) ? 'true' : undefined,
        }
      : {
          onClick: event => {
            handleClick(event, buttonPage(item));
          },
          type: item,
          page: buttonPage(item),
          selected: false,
          disabled:
            disabled ||
            (item.indexOf('ellipsis') === -1 &&
              (item === 'next' || item === 'last' ? page >= count : page <= 1)),
        };
  });
  // console.log('>>DEBUG/Pagination items: ', items);
  return { items };
};

export default usePagination;
