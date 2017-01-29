import React from 'react';
import Modal from './Modal';
import styles from '../styles/Modal.css';

let title = '';
let endDate = '';

const generateRandomColor = length => {
  var color = '';
  var charset = 'abcdef0123456789';
  for (var i = 0; i < length; i++)
    color += charset.charAt(Math.floor(Math.random() * charset.length));
  return color;
};

const addEvent = (props, title, start, end, color) => {
  events.push({
    title,
    start,
    end,
    color,
    progress: 0
  });
  props.onClose();
  props.addToaster();
};

const EventAddModal = (props) => (
  <div>
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className={styles.content}>
        <i className={`fa fa-times-circle fa-2x ${styles.closeIcon}`}
           onClick={props.onClose} />
        <div className={styles.eventTitle}>
          Add new event
        </div>
        <form
          className={styles.formContent}
          onSubmit={() => {
            title.focus();
            endDate.focus();
          }}>
          Title: <input type="text" className={styles.input} ref={(input) => { title = input; }} /> <br/><br/>
          Start date: <strong>{props.start}</strong><br/><br/>
          End date: <input type="date" className={styles.input} ref={(dateInput) => { endDate = dateInput; }} /> <br/><br/>
        </form>
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={props.onClose}>
            Cancel
          </button>
          <button className={styles.addButton} onClick={() => {
            addEvent(props, title.value, new Date(props.start), endDate.value, generateRandomColor(6));
          }}>
            Add
          </button>
        </div>
      </div>
    </Modal>
  </div>
);

EventAddModal.propTypes = {
  start: React.PropTypes.string,
  addToaster: React.PropTypes.func
};

export default EventAddModal;