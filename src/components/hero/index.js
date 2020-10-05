import React,{useState, useEffect} from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'
import { BsArrowDown } from "react-icons/bs"
import TextTransition, { presets } from "react-text-transition";
const buildingImage = require('../../images/hero-building.png')
const TEXTS = ["Conhecimento","Visão","Imaginação"];

let intervalId;

export default function Hero(){
    const [index, setIndex] = React.useState(0);

<<<<<<< HEAD
    React.useEffect(() => {
      const intervalId = setInterval(() =>
        {setIndex(index => index + 1); 
            console.log(index);
            if(index > 10){
                clearInterval(intervalId);
                setIndex(0);
            }
        },
        3000 // every 3 seconds
      );
    });
=======
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(index => index+1);
        },3000)
    },[])

    useEffect(() => {
        console.log(index);
    },[index])
>>>>>>> 9f2db9b3b01c8ad706ae0955b9952d25e4132545

    return(
        <div className={styles.hero}>
            <div className={styles.gridBackground}>
            </div>

            <div className={styles.gridContainer}>
                <Fade left cascade>
                    <div className={styles.text}>
                        <h1
                        style={{overflow: 'hidden'}}
                        >
                        <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={presets.default}
                        noOverflow
                        style={{overflow: 'hidden'}}
                        />
                        </h1>
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
            
                <div className={styles.scroll}>
                    <p>Scroll</p>
                    <BsArrowDown className={styles.scrollArrow} size={32} color={"#fff"}/>
                </div>
             
                <div className={styles.whiteArea}>
                </div>
            </div>
        </div>
    );
}