import {useContext} from 'react';
import AppContext from '../../contexts/AppContext';
import Card from './card';

const DisplayedContent = () => {
  const {filteredContent} = useContext(AppContext);

  return (
    <ul className="flex-1">
      {filteredContent.map((content, index) => <Card key={index} />)}
    </ul>
  );
};

export default DisplayedContent;
