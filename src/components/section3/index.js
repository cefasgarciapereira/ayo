import React from 'react'
import styles from './styles.module.css'
const ayoPocos = require('../../images/ayo-pocos.png');

export default function Section3(){
    
    const underlineText = (text) => (<span className={styles.underlineText}>{text}</span>)

    return(
        <div className={styles.section3}>
            <div>
                <h3>{underlineText('Viemos')} pra ficar</h3>
                <p>Estamos no nosso primeiro projeto, construindo em Poços de Caldas, porém prezando muito 
                    pela qualidade e excelência na entrega do nosso trabalho.</p>
            </div>
            <div>
                <img src={ayoPocos} style={{width: '100%'}}/>
            </div>
        </div>
    );
}