import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const updateValues = (newResults) => {
    setValue(newResults);
  };
  const updateShowResult = () =>{
    setShowResults(true)
  }
  const updateResults = (newResults) => {
    setResults(newResults);
  };

  return (
    <SearchContext.Provider value={{ results, updateResults ,value,updateValues ,updateShowResult,selectedProject, setSelectedProject ,showResults}}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };
