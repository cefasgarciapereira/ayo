import React from "react"
import styles from './styles.module.css';

export default function Header(){  
  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}>AYO</a>
      <div className={styles.headerRight}>
        <a>Lançamentos</a>
        <a>Em Obras</a>
        <a>Prontos</a>
        <a>Parcerias</a>
        <a>Contato</a>
      </div>
    </header>
  );
}