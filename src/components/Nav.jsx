import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import {
  Bookmarks,
  Explore,
  Home,
  Lists,
  Messages,
  More,
  Notifications,
  Options,
  Plus,
  Profile,
} from './NavIcons';
import NavItem from './NavItem';

function Nav() {
  const LINKS = [
    {
      id: 1,
      text: 'Home',
      Icon: <Home />,
      mobile: true,
    },
    {
      id: 2,
      text: 'Explore',
      Icon: <Explore />,
      mobile: false,
    },
    {
      id: 3,
      text: 'Notifications',
      Icon: <Notifications />,
      mobile: true,
    },
    {
      id: 4,
      text: 'Messages',
      Icon: <Messages />,
      mobile: true,
    },
    {
      id: 5,
      text: 'Lists',
      Icon: <Lists />,
      mobile: false,
    },
    {
      id: 6,
      text: 'Bookmarks',
      Icon: <Bookmarks />,
      mobile: false,
    },
    {
      id: 7,
      text: 'Profile',
      Icon: <Profile />,
      mobile: false,
    },
    {
      id: 8,
      text: 'More',
      Icon: <More />,
      mobile: true,
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between items-center py-4">
      {/* Logo */}
      <div className="hidden sm:block xl:-ml-32 py-4">
        <Link to="/">
          <img className="w-8 cursor-pointer" src={logo} alt="twitter logo" />
        </Link>
      </div>
      {/* Navigation Section */}
      <div className="flex-1 flex flex-col items-center space-y-6">
        {/* Navigation List */}
        <div className="fixed w-full bottom-0 right-0 bg-white py-1 px-2 flex justify-around sm:p-0 sm:static sm:flex-col sm:space-y-1">
          {LINKS.map((link) => {
            if (link.mobile) {
              return (
                <NavItem key={link.id} text={link.text} hidden={false}>
                  {link.Icon}
                </NavItem>
              );
            } else {
              return (
                <NavItem key={link.id} text={link.text} hidden={true}>
                  {link.Icon}
                </NavItem>
              );
            }
          })}
        </div>
        {/* Tweet Button */}
        <button className="hidden w-3/5 py-2 bg-twitter-blue text-white text-lg font-semibold rounded-full hover:bg-blue-500 sm:block xl:w-full xl:py-3">
          <span className="hidden xl:inline">Tweet</span>
          <Plus />
        </button>
      </div>
      {/* User Info Section */}
      <div className="hidden items-center hover:cursor-pointer hover:bg-gray-200 hover:rounded-full sm:flex xl:space-x-2">
        <span className="inline-block text-xl font-semibold text-white bg-emerald-800 px-4 py-2 rounded-[100%]">
          A
        </span>
        <div className="hidden xl:inline-block">
          <h4 className="text-base font-semibold">Aadhar Agarwal</h4>
          <p className="text-sm text-gray-700">@AadharAgarwal22</p>
        </div>
        <div>
          <Options />
        </div>
      </div>
    </div>
  );
}

export default Nav;
