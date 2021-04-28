import {
  Twitter, Facebook, Broadcast, Linkedin,
} from 'react-bootstrap-icons';

export default [
  {
    name: 'Home',
    link: '/',
    icon: null,
  },
  {
    name: 'About',
    link: '/about',
    icon: null,
  },
  {
    name: 'Resume',
    link: 'https://drive.google.com/file/d/1iSFX1VoxbplzefxjF6ivF1NqsT_ZhBeK/view?usp=sharing',
    icon: null,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marcus-cooper-a1321113/',
    icon: <Linkedin className="inline-block mr-2" color="#2867B2" size={20} />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/mcoopertexmed',
    icon: <Twitter className="inline-block mr-2" color="#00acee" size={20} />,
  },
  {
    name: 'Anchor',
    link: 'https://anchor.fm/marcus-cooper1',
    icon: <Broadcast className="inline-block mr-2" color="#8940FA" size={20} />,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100009958328451',
    icon: <Facebook className="inline-block mr-2" color="#3b5998" size={20} />,
  },
];
