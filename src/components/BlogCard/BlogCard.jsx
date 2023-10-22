/* eslint-disable react/prop-types */
// import { useState } from 'react'
import style from './BlogCard.module.scss';

export const BlogCard = ({ link, text, data }) => {
  return (
    <a href={link || '/#'} className={style.main}>
      <p className={style.text}>{text}</p>
      <p className={style.data}>{data}</p>
    </a>
  );
};
