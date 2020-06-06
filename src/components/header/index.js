import React from "react"
import styles from './styles.module.css';

export default function Header(){  
  return (
    <header>
      <p className={styles.logo}>AYO</p>
      <div className={styles.items}>
        <p>Lançamentos</p>
        <p>Em Obras</p>
        <p>Prontos</p>
        <p>Parcerias</p>
        <p>Contato</p>
      </div>
    </header>
  );
}
