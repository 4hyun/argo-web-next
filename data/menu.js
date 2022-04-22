const menuData = [
  {
    pid: 0,
    item: { mid: 1, title: 'Home', url: '/', icon: null, target: null },
  },
  {
    pid: 0,
    item: { mid: 2, title: 'Blog', url: '/blog', icon: null, target: null },
  },
  /* TODO: enable handbook menu after feature done */
  // {
  //   pid: 0,
  //   item: {
  //     mid: 4,
  //     title: 'Tyk Handbook',
  //     url: '/tyk-handbook',
  //     icon: 'openLinkArrow',
  //     target: '_blank',
  //   },
  // },
  {
    pid: 0,
    item: {
      mid: 3,
      title: 'Tyk',
      url: 'https://tyk.io/',
      icon: 'openLinkArrow',
      target: '_blank',
    },
  },
];
export default menuData;
