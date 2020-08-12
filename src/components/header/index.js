import React from "react"
import styles from './styles.module.css'
import OpenMenu from '../openMenu'
import { FiMenu } from "react-icons/fi"
import logo from '../../images/logo.png'


export default class Header extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      isNavVisible: false,
      isSmallScreen: false
    }
    this.handleMediaQueryChange = this.handleMediaQueryChange.bind(this);
  }

  componentDidMount(){
    if (typeof window != `undefined`) {
      const mediaQuery = window.matchMedia("(max-width: 700px)");
      mediaQuery.addListener(this.handleMediaQueryChange);
      this.handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(this.handleMediaQueryChange);
      };
    }
  }  

  componentWillMount(){
    if (typeof window != `undefined`) {
      const mediaQuery = window.matchMedia("(max-width: 700px)");
      mediaQuery.addListener(this.handleMediaQueryChange);
      this.handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(this.handleMediaQueryChange);
      };
    }
  } 

  handleMediaQueryChange(mediaQuery){
    if(mediaQuery.matches){
      this.setState({isSmallScreen: true})
    }else{
      this.setState({isSmallScreen: false})

    }
  }
  
  toggleNav(){
    this.setState({isNavVisible: !this.state.isNavVisible});
  }

  render(){
    return (
      <div>
        <header className={styles.header}>
          <img className={styles.logo} src={logo} alt="Logo da AYO"/>
            {(!this.state.isSmallScreen || this.state.isNavVisible) && (
              <nav className={styles.nav}>
              <a>Lançamentos</a>
              <a>Em Obras</a>
              <a>Prontos</a>
              <a>Parcerias</a>
              <a>Contato</a>
              </nav>
            )}
            <FiMenu size={32} color={'white'} className={styles.burguer} onClick={() => this.toggleNav()}/>
        </header>
        {(this.state.isNavVisible && this.state.isSmallScreen) && (
          <OpenMenu/>
        )}
      </div>
    );
  }
}