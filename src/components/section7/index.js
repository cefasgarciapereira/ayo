import React from 'react';
import styles from './styles.module.css'
import { FiHome, FiPhone, FiMail } from "react-icons/fi";

export default function section7(){
    return(
        <div className={styles.section7}>
            <div className={styles.section7Item}>
                <FiHome size={68} color={'#F99920'}/>
                <h3>Endereço</h3>
                <p>Sala 212, Rua Paraíba 320, Poços de Caldas, Minas Gerais, Brasil.</p>
            </div>

            <div className={styles.section7Item}>
                <FiPhone size={68} color={'#F99920'}/>
                <h3>Telefone</h3>
                <p>(35) 3714-2481</p>
            </div>

            <div className={styles.section7Item}>
                <FiMail size={68} color={'#F99920'}/>
                <h3>E-mail</h3>
                <p>contato@ayoengenharia.com</p>
            </div>
        </div>
    );    
}