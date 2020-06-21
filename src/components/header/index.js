import React, {useState, useEffect} from "react"
import styles from './styles.module.css'
import OpenMenu from '../openMenu'
import { FiMenu } from "react-icons/fi";

export default function Header(){  
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  },[])

  const handleMediaQueryChange = mediaQuery => {
    if(mediaQuery.matches){
      setIsSmallScreen(true);
    }else{
      setIsSmallScreen(false);
    }
  }
  
  const toggleNav = () =>{
    setIsNavVisible(!isNavVisible);
  }

  return (
    <div>
      <header className={styles.header}>
        <a href="" className={styles.logo}>AYO</a>
          {(!isSmallScreen || isNavVisible) && (
            <nav className={styles.nav}>
            <a>Lançamentos</a>
            <a>Em Obras</a>
            <a>Prontos</a>
            <a>Parcerias</a>
            <a>Contato</a>
            </nav>
          )}
          <FiMenu size={32} color={'white'} className={styles.burguer} onClick={() => toggleNav()}/>
      </header>
      {(isNavVisible && isSmallScreen) && (
        <OpenMenu/>
      )}
    </div>
  );
}