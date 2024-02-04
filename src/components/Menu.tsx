import React from 'react';
import Logo from '../assets/RHLogoNoWords.svg';
import { Link, NavLink } from 'react-router-dom';
import GithubLogo from '../assets/github-mark-white.svg';

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
    {
      title: 'Contact',
      route: '/contact',
    },
  ];
  return (
    <nav className="flex text-primary justify-between px-[5vw] py-9 lg:py-12">
      <Link to="/">
        <img src={Logo} className="logo h-12" alt="Vite logo" />
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
      <div className="self-center">
        <a target="_blank" rel="noreferrer" href="https://github.com/ryhill86/">
          <img className="h-6" src={GithubLogo} />
        </a>
      </div>
    </nav>
  );
};

export default Menu;
