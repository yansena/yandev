
import styles from './styles.module.scss'
import logoImg from "../../assets/Logo.svg"

import { FaReact } from 'react-icons/fa'
import {Link, NavLink} from "react-router-dom";

interface HeaderProps{
  onClick: () => void
}

export function Header({onClick}:HeaderProps){

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
          About
        </NavLink>
        <NavLink to="/experience"
           className={styles.link}
           style={({ isActive }) => ({
             color: isActive ? '#6C63FF' : '#FFFFFF',
           })}
        >
          Experience
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
        <FaReact className={styles.svg}/>
      </div>

    </header>
  )
}