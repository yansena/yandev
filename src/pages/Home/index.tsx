import homeImg from '../../assets/home-coding.svg';
import styles from './styles.module.scss';
import { FiArrowDownCircle } from 'react-icons/fi'
import {Footer} from "../../components/Footer";

export function Home(){
  return(
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.textContainer}>
            <p className={styles.textIntroduce}>Hi, my name is</p>
            <span className={styles.textName}>Yanderson Sena</span>
            <br/>
            <span className={styles.textAbout}>I build mobile apps and websites.</span>
          </div>

          <div className={styles.shortIntroduce}>
            <p>
              I’m software engineer specializing building good experiences and acessibible projects for amazing companies and peoples. <br/>Now i act as Front End Engineer, but a will go to specializing a Full Stack Javascript Developer.
            </p>
          </div>

        </div>

        <div className={styles.imageContainer}>
          <img src={homeImg} alt="Coding"/>
        </div>
      </div>

      <Footer/>

      <footer>
        <button type="button" >
          <p>See More</p>
          <FiArrowDownCircle className={styles.svg}/>
        </button>

      </footer>
    </>
  )
}