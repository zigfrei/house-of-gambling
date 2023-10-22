/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import style from './NavBar.module.scss';

export const NavBar = ({arrayOfLinks, section='header'}) => {
  return (
    <ul className={`${style.list} ${style[`${section === 'header' ? 'headerStyle' : 'footerStyle'}`]}`}>
      {arrayOfLinks.map((link) => (
        <li key={link.id} className={style.item}>
          <NavLink
            className={({ isActive }) => `${style.link} ${style[`${isActive ? 'active' : ''}`]}`}
            to={link.link}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
