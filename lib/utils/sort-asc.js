const sortAsc = (data, sortKey) =>
  data && data.sort((a, b) => (sortKey ? a[sortKey] - b[sortKey] : a - b));

export default sortAsc;
