function NavLink({ children, text }) {
  return (
    <div className="flex items-center gap-4 py-3 px-4 hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl">
      {children}
      <h2 className="hidden xl:inline xl:text-xl xl:font-medium">{text}</h2>
    </div>
  );
}

export default NavLink;
