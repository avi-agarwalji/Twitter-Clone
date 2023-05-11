import Nav from './components/Nav';

function App() {
  return (
    <div className="flex bg-white h-screen sm:max-w-2xl md:max-w-7xl mx-auto ">
      <div className="max-w-1/4 p-4 overflow-y-scroll scrollbar-hide">
        <Nav />
      </div>
      <div className="flex-1 sm:border-x-2 sm:border-gray-100 sm:px-4 sm:py-2">
        Main
      </div>
      <div className="hidden md:block w-1/4 p-4">Sidebar</div>
    </div>
  );
}

export default App;
