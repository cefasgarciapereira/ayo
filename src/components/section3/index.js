import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './styles.module.css'
const ayoPocos = require('../../images/undraw_building.svg')

export default function Section3(){
    
    const underlineText = (text) => (<span className={styles.underlineText}>{text}</span>)

    return(
        <div className={styles.section3}>
            <Fade left cascade>
                <div className={styles.content}>
                    <h3>{underlineText('Viemos')} pra ficar</h3>
                    <p>Estamos no nosso primeiro projeto, construindo em Poços de Caldas, porém prezando muito 
                        pela qualidade e excelência na entrega do nosso trabalho.</p>
                </div>
            </Fade>
            <Fade right>
                <img src={ayoPocos} alt="Logo da ayo engenharia"/>
            </Fade>
        </div>
    );
}