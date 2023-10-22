// import { useState } from 'react'
import style from './Banner.module.scss';
import MLogoIcon from '../../assets/M-middle.svg?react';
import TimerIcon from '../../assets/Timer.svg?react';
import CrownIcon from '../../assets/Crown.svg?react';
import WorldIcon from '../../assets/World.svg?react';
import MoneyIcon from '../../assets/Money.svg?react';
import SoccerIconLeft from '../../assets/Soccer-left.svg?react';
import MlogoIconLeft from '../../assets/M-left.svg?react';
import ShieldIcon from '../../assets/Shield.svg?react';
import CrownIconLong from '../../assets/Crown-long.svg?react';
import MlogoIconRight from '../../assets/M-right.svg?react';
import SoccerIconRight from '../../assets/Soccer-right.svg?react';
import WorldIconLong from '../../assets/WorldLong.svg?react';
import MoneyIconLong from '../../assets/MoneyLong_320.svg?react';

export function Banner() {
  return (
    <>
      <div className={style.container_1920}>
        <div className={`${style.banner_1920} ${style.left}`}>
          <MoneyIcon />
          <SoccerIconLeft />
          <MlogoIconLeft />
          <ShieldIcon />
          <MoneyIcon />
          <SoccerIconLeft />
          <MlogoIconLeft />
          <ShieldIcon />
          <MoneyIcon />
          <SoccerIconLeft />
          <MlogoIconLeft />
          <ShieldIcon />
          <MoneyIcon />
          <SoccerIconLeft />
          <MlogoIconLeft />
          <ShieldIcon />
        </div>
        <div className={`${style.banner_1920} ${style.central}`}>
          <MLogoIcon />
          <TimerIcon />
          <CrownIcon />
          <WorldIcon />
          <MLogoIcon />
          <TimerIcon />
          <CrownIcon />
          <WorldIcon />
          <MLogoIcon />
          <TimerIcon />
          <CrownIcon />
          <WorldIcon />
          <MLogoIcon />
          <TimerIcon />
          <CrownIcon />
          <WorldIcon />
        </div>
        <div className={`${style.banner_1920} ${style.right}`}>
          <CrownIconLong />
          <MlogoIconRight />
          <ShieldIcon />
          <SoccerIconRight />
          <CrownIconLong />
          <MlogoIconRight />
          <ShieldIcon />
          <SoccerIconRight />
          <CrownIconLong />
          <MlogoIconRight />
          <ShieldIcon />
          <SoccerIconRight />
          <CrownIconLong />
          <MlogoIconRight />
          <ShieldIcon />
          <SoccerIconRight />
        </div>
      </div>
      <div className={style.container_320}>
        <div className={`${style.banner_320} ${style.top}`}>
          <ShieldIcon />
          <SoccerIconRight />
          <ShieldIcon />
          <CrownIcon />
          <MlogoIconRight />
          <ShieldIcon />
          <SoccerIconRight />
          <ShieldIcon />
          <CrownIcon />
          <MlogoIconRight />
          <ShieldIcon />
          <SoccerIconRight />
          <ShieldIcon />
          <CrownIcon />
          <MlogoIconRight />
          <ShieldIcon />
          <SoccerIconRight />
          <ShieldIcon />
          <CrownIcon />
          <MlogoIconRight />
        </div>
        <div className={`${style.banner_320} ${style.middle}`}>
          <MLogoIcon />
          <TimerIcon />
          <CrownIcon />
          <div className={style.longIconWrapper_320}><WorldIconLong /></div>
          <MLogoIcon />
          <TimerIcon />
          <CrownIcon />
          <div className={style.longIconWrapper_320}><WorldIconLong /></div>
          <MLogoIcon />
          <TimerIcon />
          <CrownIcon />
          <div className={style.longIconWrapper_320}><WorldIconLong /></div>
          <MLogoIcon />
          <TimerIcon />
          <CrownIcon />
          <div className={style.longIconWrapper_320}><WorldIconLong /></div>
        </div>
        <div className={`${style.banner_320} ${style.bottom}`}>
        <div className={style.longIconWrapper_320}><MoneyIconLong /></div>
          <SoccerIconLeft />
          <MlogoIconLeft />
          <ShieldIcon />
          <div className={style.longIconWrapper_320}><MoneyIconLong /></div>
          <SoccerIconLeft />
          <MlogoIconLeft />
          <ShieldIcon />
          <div className={style.longIconWrapper_320}><MoneyIconLong /></div>
          <SoccerIconLeft />
          <MlogoIconLeft />
          <ShieldIcon />
          <div className={style.longIconWrapper_320}><MoneyIconLong /></div>
          <SoccerIconLeft />
          <MlogoIconLeft />
          <ShieldIcon />
        </div>
      </div>
    </>
  );
}
