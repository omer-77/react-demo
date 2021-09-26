import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Card.module.css";

function Card(props) {
  const [isModalOpen, setModalStatus] = useState(false);
  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <img src={props.data.image} alt={props.data.name}></img>
        <div className={styles.container}>
          <h4>
            <b>{props.data.name}</b>
          </h4>
        </div>
      </div>
      {isModalOpen && <Modal data={props.data} onClick={closeModal} />}
    </>
  );
}

export default Card;
