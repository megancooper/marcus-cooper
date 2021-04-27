import {Twitter, Facebook, Broadcast} from 'react-bootstrap-icons';

export default [
  {
    name: 'About',
    link: '/about',
    icon: null,
  },
  {
    name: 'Resume',
    link: '/about',
    icon: null,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/mcoopertexmed',
    icon: <Twitter className="inline-block mr-2" color="#00acee" size={20} />,
  },
  {
    name: 'Anchor FM',
    link: 'https://anchor.fm/marcus-cooper1',
    icon: <Broadcast className="inline-block mr-2" color="#8940FA" size={20} />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100009958328451',
    icon: <Facebook className="inline-block mr-2" color="#3b5998" size={20} />,
  },
];
