/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './HeaderButtons.module.scss';
import PlanetIcon from '../../assets/Icon - Planet.svg?react';
import MenuIcon from '../../assets/ButtonsMenu.svg?react';
import ButtonsMenuClose from '../../assets/ButtonsMenuClose.svg?react';
import { headerLinks } from '../../variables/mock_data';

export const HeaderButtons = ({ menuStatus, setMenuStatus }) => {
  const [lang, setLang] = useState('EN');
  const onClickLang = (e) => {
    e.preventDefault();
    lang === 'EN' ? setLang('RU') : setLang('EN');
  };

  const onClickMenu = (e) => {
    e.preventDefault();
    setMenuStatus(!menuStatus);
  };

  return (
    <div className={style.main}>
      <button
        onClick={onClickLang}
        className={`${style.button} ${style.buttonLanguage}`}
      >
        <div className={style.iconWrapper}>
          <PlanetIcon />
        </div>
        <div className={style.languageWrapper}>{lang}</div>
      </button>
      <button className={`${style.button} ${style.buttonLogIn}`}>LOG IN</button>
      <button
        className={`${style.button} ${style.buttonFill} ${style.buttonSignUp}`}
      >
        SIGN UP
      </button>
      <button onClick={onClickMenu} className={style.butttonMenu}>
        {!menuStatus && <MenuIcon />}
        {menuStatus && <ButtonsMenuClose />}
      </button>
      {menuStatus && (
        <div className={style.burgerMenu}>
          <ul className={style.list}>
            {headerLinks.map((link) => (
              <li key={link.id} className={style.item}>
                <NavLink
                  className={({ isActive }) =>
                    `${style.link} ${style[`${isActive ? 'active' : ''}`]}`
                  }
                  to={link.link}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className={style.burgerButtonLogIn}>LOG IN</button>
          <button className={style.burgerButtonSignUp}>SIGN UP</button>
        </div>
      )}
    </div>
  );
};
