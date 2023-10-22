import style from './Header.module.scss';
import { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { HeaderButtons } from '../HeaderButtons/HeaderButtons';
import {headerLinks} from '../../variables/mock_data';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  return (<>
    <header className={style.header}>
      <Logo />
      <NavBar section='header' arrayOfLinks={headerLinks} />
      <HeaderButtons menuStatus={isVisible} setMenuStatus={setIsVisible} />
    </header>
    {isVisible && (<div className={style.overlay} ></div>)}
    </>
  );
}
