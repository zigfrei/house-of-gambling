import style from './Footer.module.scss';
import { NavBar } from '../NavBar/NavBar';
import { LinkIcon } from '../LinkIcon/LinkIcon';
import TwitterIcon from '../../assets/ButtonsTwitter.svg?react';
import FacebookIcon from '../../assets/ButtonsFacebook.svg?react';
import InstagramIcon from '../../assets/ButtonsInstagram.svg?react';
import LinkedInIcon from '../../assets/ButtonsLinkedIn.svg?react';
import TelegramIcon from '../../assets/ButtonsTelegram.svg?react';
import TikTokIcon from '../../assets/ButtonsTikTok.svg?react';
import VKIcon from '../../assets/ButtonsVK.svg?react';
import YouTubeIcon from '../../assets/ButtonsYouTube.svg?react';

export function Footer() {
  const footerLinks = [
    {
      id: '1',
      link: '/#',
      title: 'Terms & Conditions',
    },
    {
      id: '2',
      link: '/#',
      title: 'Cookies',
    },
    {
      id: '3',
      link: '/#',
      title: 'Contacts',
    },
    {
      id: '4',
      link: '/#',
      title: 'Careers',
    },
    {
      id: '5',
      link: '/#',
      title: 'Brand Guide',
    },
  ];
  return (
    <footer className={style.main}>
      <NavBar section='footer' arrayOfLinks={footerLinks} />
      <div className={style.linksBarWrapper}>
        <h4 className={style.title}>Our social media:</h4>
        <div className={style.linksWrapper}>
        <LinkIcon link='/#'><TwitterIcon/></LinkIcon>
        <LinkIcon link='/#'><FacebookIcon/></LinkIcon>
        <LinkIcon link='/#'><InstagramIcon/></LinkIcon>
        <LinkIcon link='/#'><LinkedInIcon/></LinkIcon>
        <LinkIcon link='/#'><YouTubeIcon/></LinkIcon>
        <LinkIcon link='/#'><TikTokIcon/></LinkIcon>
        <LinkIcon link='/#'><TelegramIcon/></LinkIcon>
        <LinkIcon link='/#'><VKIcon/></LinkIcon>
        </div>
      </div>
    </footer>
  );
}
