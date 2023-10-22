// import { useState } from 'react'
import style from './Title.module.scss';


export function Title() {
  return (
    <section className={style.main}>
      <h1 className={style.title}>HOUSE OF <p className={style.title__decorator}>GAMBLING</p></h1>
      <p className={style.subtitle}>Raise your ROI with direct advertiser</p>
      <button className={style.button}>Become a Partner</button>
    </section>
  );
}
