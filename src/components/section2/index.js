import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import styles from './styles.module.css'
const planta = require('../../images/planta.png')
const cozinha = require('../../images/cozinha.png')

export default function Section2(){
    const [offset, setOffset] = useState({x: 1, y: 1});

    useEffect(() => {
        updateOffset(window.innerWidth, window.innerHeight);
    },[])

    function updateOffset(newX, newY){
        console.log('Atualizou offset');
        setOffset({
            x: newX - (newX*1.25),
            y: newY - (newY*1.12)});
    }


    return(
        <div className={styles.section2}>
            <Fade clear cascade>
                <div>
                    <h2>Explore nosso projeto</h2>
                    <p>Interaja com a planta para que você possa conhecer melhor nosso projeto  e o trabalho que entregamos. 
                        Com a gente, você monta o apartamento exatamente da forma que achar melhor.</p>
                </div>

                <div className={styles.plantaAndProjectContainer}>
                    <div className={styles.plantaContainer}>
                        <img src={planta}/>
                    </div>

                    <div className={styles.projetoContainer}>
                        <h3>1. Cozinha</h3>
                        <img src={cozinha}/>
                        <div className={styles.bottomButtonContainer}>
                            <a>Voltar</a>
                            <a>Próximo</a>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}