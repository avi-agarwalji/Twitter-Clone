import {
  Booksmarks,
  Explore,
  Home,
  Lists,
  Messages,
  More,
  Notifications,
  Profile,
} from './NavIcons';
import NavLink from './NavLink';

function NavList() {
  return (
    <>
      <NavLink text="Home">
        <Home />
      </NavLink>
      <NavLink text="Explore">
        <Explore />
      </NavLink>
      <NavLink text="Notifications">
        <Notifications />
      </NavLink>
      <NavLink text="Messages">
        <Messages />
      </NavLink>
      <NavLink text="Lists">
        <Lists />
      </NavLink>
      <NavLink text="Booksmarks">
        <Booksmarks />
      </NavLink>
      <NavLink text="Profile">
        <Profile />
      </NavLink>
      <NavLink text="More">
        <More />
      </NavLink>
    </>
  );
}

export default NavList;
