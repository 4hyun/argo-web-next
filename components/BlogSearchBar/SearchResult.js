const SearchResult = ({ result }) => {
  return (
    <ul>
      {result.map((item, i) => (
        <li
          key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default SearchResult;
