import React from 'react';
import Logo from '../assets/RHLogoNoWords.svg';
import { Link, NavLink } from 'react-router-dom';


const Menu: React.FC = () => {
  const menuItems = [
    {
      title: 'Home',
      route: '/',
    },
    {
      title: 'About',
      route: '/about',
    },
    {
      title: 'Projects',
      route: '/projects',
    },
  ];
  return (
    <nav className="flex text-slate-800 dark:text-white justify-between">
      <Link to="/">
        <img src={Logo} className="logo" alt="Vite logo" />
      </Link>
      <ul className="items flex list-none">
        {menuItems.map(menuItem => (
          <li className="flex px-2" key={menuItem.title}>
            <NavLink
              className="menu-item flex-align-center cursor-pointer self-center [&.active]:border-b-2"
              to={menuItem.route}
            >
              {menuItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="self-center github-logo">Github</div>
    </nav>
  );
};

export default Menu;
