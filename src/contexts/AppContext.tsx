import React, {createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import {useRouter} from 'next/router';
import {AppContextType} from '../types/app';
import {TECHNOLOGY as DefaultCategory, CATEGORIES} from '../constants';
import AllContent from '../content';
import {Article} from '../types/article';
import usePrevious from '../hooks/usePrevious';

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
  const router = useRouter();
  const pathCategory = router.asPath.replace(/\//g, '').replace('#', '');
  const [selectedCategory, setSelectedCategory] = useState<string>(DefaultCategory);
  const previousCategory = usePrevious(selectedCategory);
  const [filteredContent, setFilteredContent] = useState<Article[]>(
    AllContent.filter(c => c.categories.includes(DefaultCategory)),
  );

  useEffect(() => {
    if (
      !isEqual(pathCategory, selectedCategory)
      && (
        !isEqual(pathCategory, previousCategory)
        || previousCategory === undefined
      )
      && CATEGORIES.includes(pathCategory)) {
      setSelectedCategory(pathCategory);
    }
  }, [pathCategory]);

  useEffect(() => {
    setFilteredContent([
      ...AllContent.filter(c => c.categories.includes(selectedCategory)),
    ]);

    router.push(`/#${selectedCategory}`);
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
