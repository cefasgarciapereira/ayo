import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'
const googlemaps = require('../../images/map.png')

export default function Section6(){
  return(
    <div className={styles.googlemaps}>
      <Fade>
        <img
        src={googlemaps}
        alt="Mapa com localização da AYO Engenharia"
        />
      </Fade>
    </div>
  )
}