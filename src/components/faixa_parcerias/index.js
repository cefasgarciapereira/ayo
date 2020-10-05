import React from 'react'
import styles from './styles.module.css'
import logo from '../../images/logo.png'
import marcon from '../../images/marcon.png'
import Fade from 'react-reveal/Fade'

export default function FaixaParcerias(){
    return(
        <Fade cascade>
            <div className={styles.faixa_parcerias}>
                <img src={logo} alt="Logo da AYO"/>
                <p>
                    O apartamento já vem equipado com móveis planejados
                    (gabinete baixo de cozinha e gabinete de banheiro)
                    possibilitando complementar.
                </p>
                <img src={marcon} alt="Logo da marcenaria Marcon"/>
            </div>
        </Fade>
    )
}