import logo from '../assets/logo.svg';
import NavList from './NavList';

function Nav() {
  return (
    <div className="space-y-5">
      {/* Logo */}
      <div className="px-4">
        <img className="w-8" src={logo} alt="twitter logo" />
      </div>
      {/* Navigation List */}
      <div className="space-y-2">
        <NavList />
      </div>
      {/* Tweet Button */}
      <button className="w-full bg-twitter-blue hover:bg-blue-500 text-white text-lg py-3 font-semibold rounded-full">
        <span className="hidden xl:inline">Tweet</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 inline-block xl:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      {/* User Info Section */}
      <div className="flex space-x-3 items-center py-3 px-4 hover:cursor-pointer hover:bg-gray-200 hover:rounded-full ">
        <span className="inline-block text-xl font-semibold text-white bg-emerald-800 px-4 py-2 rounded-[100%]">
          A
        </span>
        <div className="hidden xl:inline-block">
          <h4 className="text-base font-semibold">Aadhar Agarwal</h4>
          <p className="text-sm text-gray-700">@AadharAgarwal22</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hidden xl:inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Nav;
