import React, {createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {AppContextType} from '../types/app';
import {DIGITAL_CONTENT as DefaultCategory} from '../constants';
import AllContent from '../content';
import {Article} from '../types/article';

const Context = createContext<AppContextType>({
  selectedCategory: '',
  setSelectedCategory: () => {},
  filteredContent: [],
});

export default Context;

interface ContextProps {
  children: JSX.Element[] | JSX.Element;
}

export const AppContextProvider = ({children}: ContextProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(DefaultCategory);
  const [filteredContent, setFilteredContent] = useState<Article[]>(
    AllContent.filter(c => c.category === DefaultCategory),
  );

  useEffect(() => {
    setFilteredContent([
      ...AllContent.filter(c => c.category === selectedCategory),
    ]);
  }, [selectedCategory]);

  return (
    <Context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        filteredContent,
      }}
    >
      {children}
    </Context.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
