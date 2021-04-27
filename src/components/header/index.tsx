import Link from 'next/link';
import MenuItems from './menuItems';
import Hamburger from './hamburger';

const Header = () => (
  <nav>
    <div
      className="mx-auto px-16 py-2 hidden lg:inline-flex items-center w-full h-20 justify-between 2xl:justify-center"
    >
      <img
        alt="Marcus Cooper profile"
        src="/assets/profile.jpeg"
        className="block h-40 w-40 mr-20 relative"
        style={{borderRadius: '50%', bottom: 30}}
      />
      <ul className="flex justify-center">
        {MenuItems.map(item => (
          <>
            {item.link.includes('http') ? (
              <a className="pr-10 inline-flex items-center" href={item.link} target="_blank" rel="noreferrer">
                {item.icon}
                {item.name}
              </a>
            )
              : (
                <Link href={item.link}>
                  <a className="pr-10 inline-flex items-center">
                    {item.icon}
                    {item.name}
                  </a>
                </Link>
              )}
          </>
        ))}
      </ul>
    </div>
    <Hamburger />
  </nav>
);

export default Header;
