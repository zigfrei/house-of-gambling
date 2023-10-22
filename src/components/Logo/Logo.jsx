import style from './Logo.module.scss';
import LogoIconDesktop from '../../assets/logo_1920.svg?react';
import LogoIconMobile from '../../assets/logo_550.svg?react';

export function Logo() {
  return (
   <div className={style.logo}>
    <div className={style.desktopIconWrapper}><LogoIconDesktop/></div>
    <div className={style.mobileIconWrapper}> <LogoIconMobile/></div>
   </div>
  )
}

