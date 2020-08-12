import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from './styles.module.css'

export default function MyVerticallyCenteredModal(props) {
    const [status, setStatus] = useState("")

    const  submitForm = (ev) =>{
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setStatus({ status: "SUCCESS" });
          } else {
            setStatus({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }

    return (
        <div styles={styles.modal}>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Fale conosco
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                    onSubmit={() => submitForm}
                    action="https://formspree.io/mnqgljae"
                    method="POST"
                    className={styles.mailForm}>
                        <input type="email" name="email" placeholder="E-mail"/>
                        <textarea type="text" name="message" placeholder="Escreva sua mensagem..."/>
                        {status === "SUCCESS" ? <p>Obrigado!</p> : <button>Submit</button>}
                        {status === "ERROR" && <p>Ops! Infelizmente, tivemos uma falha.</p>}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className={styles.customButton} onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }