import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

export function Modal(props) {
  const navigate = useNavigate();

  const onCloseModal = () => {
    navigate('..');
  }

  return <>
    <div className={classes.backdrop} onClick={onCloseModal}></div>
    <dialog open className={classes.modal}>{props.children}</dialog>
  </>
}