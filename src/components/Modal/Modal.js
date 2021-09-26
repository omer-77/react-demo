import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <>
      <div id="myModal" className={styles.modal}>
        <div className={styles["modal-content"]}>
          <div className={styles["modal-header"]}>
            <span className={styles.close} onClick={props.onClick}>
              &times;
            </span>
            <h2>{props.data.name}</h2>
          </div>
          <div className={styles["modal-body"]}>
            <img src={props.data.image} className={styles.img}></img>
            <div className={styles["data-container"]}>
              <p>Status : {props.data.status}</p>
              <p>Species: {props.data.species}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
