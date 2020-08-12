import React, {useState} from 'react'
import styles from './styles.module.css'
import Modal from '../modal'

export default function Section4(){
    const [isModalShow, setIsModalShow] = useState(false)

    return(
        <div className={styles.section4}>
            <h3>Uma empresa nova trabalhando com seriedade</h3>
            <button onClick={() => setIsModalShow(true)}>saiba mais</button>
            
            {
                (typeof window !== `undefined`) && 
                <Modal
                show={isModalShow}
                onHide={() => setIsModalShow(false)}/>
            }
        </div>
    )
}