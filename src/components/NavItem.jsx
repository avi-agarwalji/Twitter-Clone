import { Link } from 'react-router-dom';

function NavItem({ children, text, hidden }) {
  const mobStyles =
    'hidden sm:flex items-center gap-4 py-3 px-4 hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl';
  const styles =
    'flex items-center gap-4 py-3 px-4 hover:cursor-pointer hover:bg-gray-200 hover:rounded-3xl';

  const href =
    text === 'Explore' || text === 'Lists' || text === 'More'
      ? '#'
      : text === 'Home'
      ? '/'
      : text.toLowerCase();
  return (
    <Link to={href}>
      <div className={hidden ? mobStyles : styles}>
        {children}
        <h2 className="hidden xl:inline xl:text-xl xl:font-medium">{text}</h2>
      </div>
    </Link>
  );
}

export default NavItem;
