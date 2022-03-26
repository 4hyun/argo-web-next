import { useContext } from 'react';
import { SearchContext } from '@/contexts/Search';

const useSearchProvider = () => {
  const context = useContext(SearchContext);
  return context;
};

export default useSearchProvider;
