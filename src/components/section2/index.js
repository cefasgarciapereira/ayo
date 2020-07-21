import React, {useState} from 'react'
import Fade from 'react-reveal/Fade'
import styles from './styles.module.css'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import cozinha from '../../images/cozinha.png'
import sala from '../../images/sala.png'
import quarto from '../../images/quarto.png'
import banheiro from '../../images/banheiro.png'
import planta_cozinha from '../../images/planta_cozinha.png'
import planta_sala from '../../images/planta_sala.png'
import planta_quarto from '../../images/planta_quarto.png'
import planta_banheiro from '../../images/planta_banheiro.png'
import onofrio from '../../images/onofrio.png'

export default function Section2(){
    const [index, setIndex] = useState(0);
    const [labels] = useState(['Cozinha','Sala','Quarto','Banheiro'])
    const [projetos] = useState([cozinha,sala,quarto,banheiro])
    const [plantas] = useState([planta_cozinha,planta_sala,planta_quarto,planta_banheiro])

    function incrementIndex(){
        if(index < projetos.length - 1){
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }

    function decrementIndex(){
        if(index > 0){
            setIndex(index - 1)
        }else{
            setIndex(projetos.length - 1)
        }
    }

    return(
        <div className={styles.section2}>
            <Fade clear cascade>
                <div className={styles.introduction}>
                    <h2>Explore nosso projeto</h2>
                    <img src={onofrio} alt="Logo do Onofrio Residenziale"/>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.plantaAndProjectContainer}>
                        <div className={styles.plantaContainer}>
                            <img src={plantas[index]} alt="Planta do apartamento"/>
                            <div className={styles.projectDescription}>
                                <p>
                                Apartamento funcional com 51m², distribuído em dois quartos amplos, 
                                sala conjugada com cozinha seguindo o conceito moderno de ambientes 
                                abertos, benheiro, área de serviços, mais vaga de garagem, espaçosa, 
                                independente e demarcada. Fino acabamento e excelente localização.
                                </p>
                            </div>
                        </div>

                        <div className={styles.projetoContainer}>
                            <h3>{index+1}. {labels[index]}</h3>
                            <img src={projetos[index]} alt="Projeto em 3d do apartamento"/>
                            <div className={styles.bottomButtonContainer}>
                                <BsArrowLeft className={styles.section2icon} size={32} color={"rgba(0,0,0,.5)"} onClick={() => decrementIndex()}/>
                                <BsArrowRight className={styles.section2icon} size={32} color={"rgba(0,0,0,.5)"} onClick={() => incrementIndex()}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Fade>
        </div>
    )
}