import React from 'react'
import styles from './styles.module.css'
import Typing from 'react-typing-animation'
const buildingImage = require('../../images/hero-building.png')

export default function Hero(){

    return(
        <div className={styles.hero}>
            <div className={styles.heroContentArea}>
                <div className={styles.left}>
                    <div style={{minHeight: '18rem'}}>
                        <Typing loop speed={100} hideCursor>
                            <h1>Imaginação.</h1>
                            <Typing.Delay ms={2000} />
                            <Typing.Backspace count={12} />
                            <h1>Conhecimento.</h1>
                            <Typing.Delay ms={2000} />
                            <Typing.Backspace count={14} />
                            <h1>Visão.</h1>
                            <Typing.Delay ms={2000} />
                            <Typing.Backspace count={6} />
                        </Typing>
                    </div>
                    <h2 className={styles.text}>Construir sua casa é mais do que levantar quatro paredes. 
                    Envolve combinar imaginação, visão e o conhecimento técnico para transformar uma obra 
                    em lar. Este é o diferencial da <b style={{fontSize: '2.4rem'}}>AYO</b>.</h2>
                </div>
                <div className={styles.right}>
                    <img 
                    src={buildingImage} 
                    className={styles.building}
                    alt="Blue window building"/>
                    <p className={styles.scroll}>Scroll</p>
                </div>
            </div>
            <div className={styles.heroWhiteArea}>
            </div>
        </div>
    );
}