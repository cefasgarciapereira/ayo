import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './styles.module.css'
const planning = require('../../images/planning.png')
const collab = require('../../images/collab.png')
const easy = require('../../images/easy.png')

export default function Section1(){
    return(
        <div className={styles.section1}>

                <div className={styles.sectionItem}>
                    <Fade left>
                        <img src={planning} alt="Engenheiro planejando o projeto"/>
                    </Fade>
                    <Fade rigth>
                        <div className={styles.sectionItemText}>
                            <h3>Planejamos</h3>
                            <p>Nós dedicamos o tempo inicial do projeto para planejamento. Analisamos os 
                                potenciais problemas financeiros e estruturais antes da construção começar.</p>
                        </div>
                    </Fade>
                </div>

            <div className={styles.sectionItem}>
                <Fade left>
                    <div className={styles.sectionItemTextLeft}>
                        <h3>Colaboramos</h3>
                        <p>Possuímos uma lista de parceiros que são referência no que fazem, 
                            com quem nossos engenheiros e arquitetos gostam de trabalhar.</p>
                    </div>
                </Fade>
                <Fade right>
                <div className={styles.rightImage}>
                    <img src={collab} alt="Pessoas colaborando"/>
                </div>
                </Fade>
            </div>

            <div className={styles.sectionItem}>
                <Fade left>
                <img src={easy} alt="Aperto de mãos"/>
                </Fade>
                <Fade right>
                <div className={styles.sectionItemText}>
                    <h3>Facilitamos</h3>
                    <p>Temos formas de te ajudar a financiar o valor da obra e também para adiquirir seus móveis planejados.</p>
                </div>
                </Fade>
            </div>
        </div>
    )
}