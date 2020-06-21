import React from 'react'
import styles from './styles.module.css'
const googlemaps = require('../../images/map.png')

export default function Section6(){
  return(
    <div className={styles.googlemaps}>
      <img
      src={googlemaps}
      />
    </div>
  )
}