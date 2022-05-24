import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import styles from './styles.module.scss';


export function Footer(){
  return(
    <div>
      <FiMail />
      <FiGithub />
      <FiLinkedin/>
    </div>
  );
}