import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import styles from './styles.module.scss';


export function Footer(){
  return(
    <div className={styles.footer}>
      <button style={{ background: 'transparent', border: 0 }}>
        <FiMail />
      </button>
      <button style={{ background: 'transparent', border: 0 }}>
        <FiGithub />
      </button>
      <button style={{ background: 'transparent', border: 0 }}>
        <FiLinkedin/>
      </button>
      <div className={styles.line}></div>
    </div>
  );
}