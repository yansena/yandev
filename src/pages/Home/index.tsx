import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import homeImg from '../../assets/home-coding.svg';
import styles from './styles.module.scss';
import { FiArrowDownCircle } from 'react-icons/fi'
import {Footer} from "../../components/Footer";
import { useTranslation } from 'react-i18next';

export function Home(){

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { t } = useTranslation();

  return(
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.textContainer} data-aos="fade-down">
            <p className={styles.textIntroduce}>{t('introduction')}</p>
            <span className={styles.textName}>{t('name')}</span>
            <br/>
            <span className={styles.textAbout}>{t('shortDescription')}</span>
          </div>

          <div className={styles.shortIntroduce} data-aos="fade-up">
            <p>{t('description')}</p>
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