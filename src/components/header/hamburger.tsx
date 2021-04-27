import cx from 'classnames';
import Link from 'next/link';
import {useState, useRef} from 'react';
import {List, X} from 'react-bootstrap-icons';
import MenuItems from './menuItems';
import useOutsideClick from '../../hooks/useOutsideClick';

const Hamburger = () => {
  const hamburgerMenu = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  useOutsideClick(hamburgerMenu, handleClose);

  return (
    <>
      <div className="block lg:hidden">
        <button
          ref={hamburgerMenu}
          type="button"
          className="flex items-center px-3 py-2 appearance-none focus:outline-none bg-white hover:bg-white ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <List size={30} />
        </button>
      </div>

      <div
        className={cx(
          'z-10 bg-white',
          !isMenuOpen && 'hidden',
        )}
      >
        <X
          className="absolute right-2 top-1.5 z-20"
          size={35}
          onClick={handleClose}
        />
        <ul className="inline-flex flex-col absolute top-0 left-0 z-10 w-screen bg-theme shadow">
          {MenuItems.map(item => (
            <li className="p-3">
              {item.link.includes('http') ? (
                <a className="px-10 hover:text-gray-800" href={item.link} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              )
                : (
                  <Link href={item.link}>
                    <a className="px-10 hover:text-gray-800">
                      {item.name}
                    </a>
                  </Link>
                )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
