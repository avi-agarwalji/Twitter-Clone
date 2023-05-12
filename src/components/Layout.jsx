import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="flex bg-white h-screen sm:max-w-2xl md:max-w-7xl mx-auto ">
      <div className="max-w-1/4 overflow-y-scroll scrollbar-hide">
        <Nav />
      </div>
      <div className="flex-1 overflow-y-scroll scrollbar-hide sm:border-x-2 sm:border-gray-100">
        {children}
      </div>
      <div className="hidden md:block w-1/4 overflow-y-scroll scrollbar-hide">
        Sidebar
      </div>
    </div>
  );
}
