import {useContext} from 'react';
import AppContext from '../../contexts/AppContext';

interface Props {
  categories: string[]
}

const Categories = ({categories}: Props) => {
  const {setSelectedCategory} = useContext(AppContext);

  return (
    <div className="max-w-xs">
      {categories.map((filter, index) => (
        <button
          type="button"
          key={index}
          className="bg-white hover:bg-gray-100 rounded mr-2 mt-2 px-2 py-0 shadow-sm focus:outline-none"
          onClick={() => setSelectedCategory(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Categories;
