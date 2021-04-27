import {useContext} from 'react';
import AppContext from '../../contexts/AppContext';

interface Props {
  categories: string[]
}

const Categories: React.FC<Props> = ({categories}: Props) => {
  const {setSelectedCategory} = useContext(AppContext);

  return (
    <div className="w-full lg:max-w-xs mb-2 lg:mb-0 mt-4">
      <strong className="text-xl">Categories</strong>
      <div className="mt-4">
        {categories.map((filter, index) => (
          <button
            type="button"
            key={index}
            className="bg-white hover:bg-gray-100 text-lg rounded mr-2 mt-2 px-2 py-0 shadow-sm focus:outline-none"
            onClick={() => setSelectedCategory(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
