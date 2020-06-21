import React from 'react'
import styles from './styles.module.css'
const buildingImage = require('../../images/hero-building.png')

export default function Hero(){

    return(
        <div className={styles.hero}>
            <div className={styles.gridBackground}>
            </div>
<<<<<<< HEAD

=======
>>>>>>> 9b6f339af4a6712d29c1d5a7edf9331aa3238351
            <div className={styles.gridContainer}>
                <div className={styles.text}>
                    <h1>Conhecimento.</h1>
                    <p>Construir sua casa é mais do que levantar quatro paredes. 
                    Envolve combinar imaginação, visão e o conhecimento técnico para transformar uma obra 
                    em lar. Este é o diferencial da AYO.</p>
                </div>
<<<<<<< HEAD
            
=======
>>>>>>> 9b6f339af4a6712d29c1d5a7edf9331aa3238351
                <div className={styles.imageContainer}>
                    <img 
                    src={buildingImage} 
                    className={styles.building}
                    alt="Blue window building"/>
                </div>
<<<<<<< HEAD
            
                <p className={styles.scroll}>Scroll</p>
            
=======
                <p className={styles.scroll}>Scroll</p>
>>>>>>> 9b6f339af4a6712d29c1d5a7edf9331aa3238351
                <div className={styles.whiteArea}>
                </div>
            </div>
        </div>
    );
}