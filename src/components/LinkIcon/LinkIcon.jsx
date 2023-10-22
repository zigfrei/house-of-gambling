/* eslint-disable react/prop-types */
import style from './LinkIcon.module.scss';

export const LinkIcon=({link, children}) => {
  return (
    <a href={link || '/#'}  className={style.link}>
    <div className={style.iconWrapper}>
    {children}
    </div>
  </a>
)}
