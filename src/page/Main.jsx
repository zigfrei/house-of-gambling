// import { useState } from 'react'
import style from './Main.module.scss';
import { Decorator } from '../components/Decorator/Decorator';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Content } from '../components/Content/Content';
import { Footer } from '../components/Footer/Footer';

function Main() {
  return (
    <div className={style.page}>
      <Header />
      <Decorator />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default Main;
