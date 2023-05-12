import logo from '../assets/logo.svg';
import {
  Booksmarks,
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
import NavLink from './NavLink';

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
      text: 'Booksmarks',
      Icon: <Booksmarks />,
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
    <div className="h-full flex flex-col justify-between items-center p-4">
      {/* Logo */}
      <div className="hidden sm:block xl:-ml-32 py-4">
        <img className="w-8 cursor-pointer" src={logo} alt="twitter logo" />
      </div>
      {/* Navigation Section */}
      <div className="flex-1 flex flex-col items-center space-y-6">
        {/* Navigation List */}
        <div className="fixed w-full bottom-0 right-0 bg-gray-100 py-1 px-2 flex justify-around sm:bg-white sm:p-0 sm:static sm:flex-col sm:space-y-1">
          {LINKS.map((link) => {
            if (link.mobile) {
              return (
                <NavLink key={link.id} text={link.text} hidden={false}>
                  {link.Icon}
                </NavLink>
              );
            } else {
              return (
                <NavLink key={link.id} text={link.text} hidden={true}>
                  {link.Icon}
                </NavLink>
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
