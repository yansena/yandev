import {useEffect, useState} from "react";
import { FiChevronRight, FiCornerRightDown, FiTerminal, FiCoffee } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import experienceImg from "../../assets/projects.svg";
import styles from './styles.module.scss'

interface ExperienceProps {
  id: number
  period: string
  title: string
  level: string
  description: string
}

export function Experience(){

  const [ titleSelected, setTitleSelected ] = useState('null');

  const experiences: ExperienceProps[] = [
    {
      id: 0,
      title: 'yandeh',
      period: 'Actual',
      level: `Senior Mobile Developer`,
      description: 'Work with a project to comercial area, its a app for a do selling, my responsibility it was create a new features to app, fix buggies, analise code and make her more maintainable, write unit tests and follow the deploy process.'
    },
    {
      id: 1,
      title: 'capgemini',
      period: '2021 - 2022',
      level: 'Middle Mobile Developer',
      description: 'In this Project I work analyzing the mobile application, there has moving for React Native from two native projects, between migration has developed new features and fix bugs, after implementation and tests, does a refactoring in code, before at deploy.'
    },
    {
      id: 2,
      title: 'meta',
      period: '2021 - 2021',
      level: 'Middle Mobile Developer',
      description: 'This Project has developed a Identidade Funcional for de Minister of Justice and Public Security of Brazil, making new screens based on the project design, creating tests and getting a backend integration, in this project we had a liberty of innovation for use new technologies.'
    },
    {
      id: 3,
      title: 'stg',
      period: '2020 - 2021',
      level: 'Junior Mobile Developer',
      description: 'In this one I needed to make plannings for applications if I had to develop, selecting used technologies, I contact designers for explain the project’s idea, or send a tiny model made in Figma, after this, it’s done the development and implementation of the features planed, together analyzing and fixing bugs.'
    },
  ];

  function handleShowExperience(title: string){
    setTitleSelected(title);
  }

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return(
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={experienceImg} alt="About Image"/>
      </div>
      <div className={styles.experienceContainer}>
        <div className={styles.experienceContainerTitle}>
          <h1>Experiences.me</h1>
          <FiCoffee />
        </div>
        <div className={styles.experiencesContainer} data-aos="fade-right">
          <div className={styles.experiences}>
          <button
              onClick={() => handleShowExperience('yandeh')}
              className={titleSelected === 'yandeh' ? styles.experienceSelected : ''}
            >
              <FiChevronRight />
              <p>Yandeh</p>
            </button>
            <button
              onClick={() => handleShowExperience('capgemini')}
              className={titleSelected === 'capgemini' ? styles.experienceSelected : ''}
            >
              <FiChevronRight />
              <p>Capgemini/Banco do Brasil</p>
            </button>
            <button
              onClick={() => handleShowExperience('meta')}
              className={titleSelected === 'meta' ? styles.experienceSelected : ''}
            >
              <FiChevronRight />
              <p>Meta Consultoria/MJSP</p>
            </button>
            <button
              onClick={() => handleShowExperience('stg')}
              className={titleSelected === 'stg' ? styles.experienceSelected : ''}
            >
              <FiChevronRight />
              <p>STG Saúde</p>
            </button>
          </div>
          <div className={styles.arrowContainer}>
            {
              titleSelected !== 'null' && (
                <FiCornerRightDown data-aos="fade-down"/>
              )
            }
          </div>
        </div>
        <>
          {
            experiences.map((value: ExperienceProps) => {
              if(value.title === titleSelected){
                return (
                  <div key={value.id} className={styles.description} data-aos="fade-left">
                    <div className={styles.descriptionHeader}>
                      
                      <h2><FiTerminal />{value.level}</h2>
                      <h3>{value.period}</h3>
                    </div>
                    <p>{value.description}</p>
                  </div>
                )
              }
            })
          }
        </>
      </div>
    </div>
  )
}