
import styles from './styles.module.scss'
import logoImg from "../../assets/Logo.svg"

import { FaReact } from 'react-icons/fa'
import {Link, NavLink} from "react-router-dom";
import { useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

interface HeaderProps{
  onClick: () => void
}

export function Header({onClick}:HeaderProps){

  const { t } = useTranslation();

  const [lang, setLang] = useState('en');

  function changeLanguage(){
    if(lang === 'en'){
      setLang('pt-BR')
      i18next.changeLanguage('pt-BR')
    } else {
      setLang('en')
      i18next.changeLanguage('en')
    }
  }



  return(
    <header className={styles.content}>

      <a href="/">
        <img src={logoImg} alt="Logo"/>
      </a>

      <div>
        <NavLink
          to="/about"
          className={styles.link}
          style={({ isActive }) => ({
            color: isActive ? '#6C63FF' : '#FFFFFF',
          })}
        >
          {t('about')}
        </NavLink>
        <NavLink to="/experience"
           className={styles.link}
           style={({ isActive }) => ({
             color: isActive ? '#6C63FF' : '#FFFFFF',
           })}
        >
          {t('experience')}
        </NavLink>
        {/* <NavLink
          to="/work"
          className={styles.link}
          style={({ isActive }) => ({
            color: isActive ? '#6C63FF' : '#FFFFFF',
          })}
        >
          Projects
        </NavLink> */}
        {/* <NavLink
          to="/contact"
          className={styles.link}
          style={({ isActive }) => ({
            color: isActive ? '#6C63FF' : '#FFFFFF',
          })}
        >
          Contact
        </NavLink> */}
        <a href="https://drive.google.com/file/d/1eko0WWuTeveuB4BL2EwMgFvZLSfUO14O/view?usp=sharing" className={styles.link}>Resume</a>
        <button  
          className={styles.translateButton} 
          onClick={changeLanguage}
          about='Translate Button'
          aria-label='Translate'
        >
          <p>{t('translate')}</p>
          <FaReact className={styles.svg}/>
        </button>
      </div>

    </header>
  )
}