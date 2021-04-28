import {useContext} from 'react';
import AppContext from '../../contexts/AppContext';
import Card from './card';

const DisplayedContent = () => {
  const {filteredContent} = useContext(AppContext);

  return (
    <ul className="flex-1 overflow-y-auto overflow-x-hidden">
      {filteredContent.map((content, index) => <Card key={index} content={content} />)}
    </ul>
  );
};

export default DisplayedContent;
