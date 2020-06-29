import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'
const buildingImage = require('../../images/hero-building.png')

export default function Hero(){

    return(
        <div className={styles.hero}>
            <div className={styles.gridBackground}>
            </div>

            <div className={styles.gridContainer}>
                <Fade left cascade>
                    <div className={styles.text}>
                        <h1>Conhecimento</h1>
                        <p>Construir sua casa é mais do que levantar quatro paredes. 
                        Envolve combinar imaginação, visão e o conhecimento técnico para transformar uma obra 
                        em lar. Este é o diferencial da AYO.</p>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className={styles.imageContainer}>
                        <img 
                        src={buildingImage} 
                        className={styles.building}
                        alt="Blue window building"/>
                    </div>
                </Fade>
            
                <p className={styles.scroll}>Scroll</p>
            
                <div className={styles.whiteArea}>
                </div>
            </div>
        </div>
    );
}