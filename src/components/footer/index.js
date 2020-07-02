import React from 'react'
import styles from './styles.module.css'
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";


export default function Footer(){
    const iconColor = 'rgba(0,0,0,.5)';

    return(
        <div className={styles.footer}>
            <p>AYO Engenharia 2020, Todos os direitos reservados.</p>
            <div className={styles.socialMedia}>
                <FiFacebook size={24} color={iconColor}/>
                <FiTwitter size={24} color={iconColor}/>
                <FiInstagram size={24} color={iconColor}/>
            </div>
        </div>
    )
}