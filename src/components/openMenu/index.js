import React from 'react';
import styles from './styles.module.css'

export default function OpenMenu(){
    return(
        <nav className={styles.openMenu}>
            <a>Lançamentos</a>
            <a>Em Obras</a>
            <a>Prontos</a>
            <a>Parcerias</a>
            <a>Contato</a>
        </nav>
    )

}