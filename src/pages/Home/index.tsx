import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import homeImg from '../../assets/home-coding.svg';
import styles from './styles.module.scss';
import { FiArrowDownCircle } from 'react-icons/fi'
import {Footer} from "../../components/Footer";

export function Home(){

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return(
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.textContainer} data-aos="fade-down">
            <p className={styles.textIntroduce}>Hi, my name is</p>
            <span className={styles.textName}>Yanderson Sena</span>
            <br/>
            <span className={styles.textAbout}>I build mobile apps and websites.</span>
          </div>

          <div className={styles.shortIntroduce} data-aos="fade-up">
            <p>
              I’m software engineer specializing building good experiences and acessibible projects for amazing companies and peoples. <br/>Now i act as Front End Engineer, but a will go to specializing a Full Stack Javascript Developer.
            </p>
          </div>

        </div>

        <div className={styles.imageContainer}>
          <img src={homeImg} alt="Coding"/>
        </div>
      </div>


      {/*<Footer/>*/}

    </div>
  )
}