/* eslint-disable react/prop-types */
// import { useState } from 'react'
import style from './Blog.module.scss';
import { BlogCard } from '../BlogCard/BlogCard';
import { arrayOfComents } from '../../variables/mock_data';

export function Blog({ arrayOfRecords = arrayOfComents }) {
  return (
    <section className={style.main}>
      <h2 className={style.title}>Blog</h2>
      <div className={style.containerWrapper}>
      <div className={style.container}>
        {arrayOfRecords.map((record) => (
          <BlogCard
            key={record.id}
            link={record.link}
            text={record.text}
            data={record.data}
          />
        ))}
      </div></div>
    </section>
  );
}
