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
} from './Icons';
import NavItem from './NavItem';
import Avatar from './Avatar';

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
    <div className="h-full flex flex-col justify-between gap-7 py-1 items-center sm:p-4 lg:px-0">
      {/* Logo */}
      <div className="hidden sm:block xl:-ml-32">
        <Link to="/">
          <img className="w-8 cursor-pointer" src={logo} alt="twitter logo" />
        </Link>
      </div>
      {/* Navigation Section */}
      <div className="w-full flex-1 flex flex-col items-center space-y-4">
        {/* Navigation List */}
        <div className="fixed w-full bottom-0 right-0 bg-white py-1 px-2 flex justify-around sm:p-0 sm:static sm:flex-col sm:space-y-1">
          {/* Single Navigation Link */}
          {LINKS.map((link) => {
            return (
              <NavItem key={link.id} text={link.text} mobile={link.mobile}>
                {link.Icon}
              </NavItem>
            );
          })}
        </div>
        {/* Tweet Button */}
        <button className="hidden w-3/5 py-1 bg-twitter-blue text-white text-lg font-semibold rounded-full hover:bg-blue-500 sm:block xl:w-full xl:py-3">
          <span className="hidden xl:inline">Tweet</span>
          <Plus />
        </button>
      </div>
      {/* User Info Section */}
      <div className="hidden p-2 items-center hover:cursor-pointer hover:bg-gray-200 hover:rounded-full sm:flex xl:space-x-2">
        {/* User Profile Pic */}
        <Avatar profileIcon="A" color="bg-red-800" />
        {/* User Info */}
        <div className="hidden xl:inline-block">
          <h4 className="text-base font-semibold">Aadhar Agarwal</h4>
          <p className="text-sm text-gray-700">@AadharAgarwal22</p>
        </div>
        <div className="hidden xl:inline-block">
          <Options />
        </div>
      </div>
    </div>
  );
}

export default Nav;
