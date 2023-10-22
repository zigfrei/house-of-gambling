// import { useState } from 'react'
import style from './Content.module.scss';
import { Title } from '../Title/Title';
import { Blog } from '../Blog/Blog';

export function Content() {
  return (
    <div className={style.main}>
      <Title />
      <Blog />
    </div>
  );
}
