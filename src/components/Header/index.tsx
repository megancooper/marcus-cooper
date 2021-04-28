import Link from 'next/link';
import MenuItems from './menuItems';
import Hamburger from './hamburger';

const Header = () => (
  <nav>
    <div
      className="mx-auto px-20 py-2 hidden lg:inline-flex items-center w-full h-20 justify-between 2xl:px-40"
    >
      <div className="flex items-center">
        <img
          alt="Marcus Cooper profile"
          src="/assets/profile.jpeg"
          className="block h-40 w-40 mr-4 relative"
          style={{borderRadius: '50%', bottom: 30}}
        />
        <div className="mr-20 mt-5">
          <strong className="text-xl">Marcus Cooper</strong>
          <p className="text-gray-500">
            Senior-Level Communications Executive
            <br />
            Austin, TX
          </p>
        </div>
      </div>
      <ul className="flex justify-center">
        {MenuItems.map((item, index) => (
          <>
            {item.link.includes('http') ? (
              <a key={index} className="pr-10 inline-flex items-center" href={item.link} target="_blank" rel="noreferrer">
                {item.icon}
                {item.name}
              </a>
            )
              : (
                <Link key={index} href={item.link}>
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
