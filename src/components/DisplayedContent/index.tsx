import {useContext, useEffect} from 'react';
import {TECHNOLOGY} from '../../constants';
import AppContext from '../../contexts/AppContext';
import Card from './card';

const DisplayedContent = () => {
  const {filteredContent, setSelectedCategory} = useContext(AppContext);

  useEffect(() => {
    setSelectedCategory(TECHNOLOGY);
  }, []);

  return (
    <ul className="flex-1 overflow-y-auto overflow-x-hidden">
      {filteredContent.map((content, index) => <Card key={index} content={content} />)}
    </ul>
  );
};

export default DisplayedContent;
