import styles from './styles.module.scss';
import aboutImg from "../../assets/about.svg";
import { SiJavascript, SiReact, SiNodedotjs, SiTypescript, SiPostgresql, SiFigma } from 'react-icons/si'
import {Footer} from "../../components/Footer";


export function About(){
  return(
  <>
    <div className={styles.container}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutHeader} data-aos="zoom-out-right">
          <h1>About.me</h1>
          <p>
            Hello! My Name is Yanderson, but my friends call me as Yan,
            I say that born in technology, when I had seven years my father start to work whith IT, since this contact, I a keep in close with the technology and excited about the future of this, after long time making fixing in computer,
            I decided to study about software, a go to college and short time after,
            I loved development.
          </p>
          <br/>
          <p>
            Actually I work as Front End Engenieer, using Javascript stack whit my main knowlegue and developments. Specializing in React eviropment and NodeJS for backend necessities.
          </p>
      </div>

        <div className={styles.technologies} data-aos="zoom-out-right">
          <h3>Here are a few technologies I’ve been working with recently:</h3>
          <div  className={styles.technologiesContainer}>
            <div className={styles.technologiesContainerDetail}>
              <div className={styles.technologie} >
                <SiJavascript />
                <p>JavaScript (ES+)</p>
              </div >
              <div className={styles.technologie} >
                <SiReact />
                <p>ReactJS & React Native</p>
              </div>
              <div className={styles.technologie} >
                <SiNodedotjs />
                <p>NodeJS</p>
              </div>
            </div>
            <div>
              <div className={styles.technologie} >
                <SiTypescript />
                <p>Typescript</p>
              </div >
              <div className={styles.technologie} >
                <SiPostgresql />
                <p>PostgressSQL</p>
              </div>
              <div className={styles.technologie} >
                <SiFigma />
                <p>Figma</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.aboutImageContent}>
        <img src={aboutImg} alt="About Image"/>
      </div>

    </div>
  </>
  );
}