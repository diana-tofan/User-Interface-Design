import React from 'react';
import Modal from './Modal';
import styles from '../styles/Modal.css';

const EventModal = (props) => (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <div className={styles.content}>
      <i className={`fa fa-times-circle fa-2x ${styles.closeIcon}`}
         onClick={props.onClose} />
      <div className={styles.eventTitle}>
        {props.title}
      </div>
      <div className={styles.dates}>
        {props.startDate} - {props.endDate}
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.cancelButton} onClick={props.hideModal}>
          Cancel
        </button>
        <button className={styles.deleteButton} onClick={props.deleteEvent}>
          Delete
        </button>
      </div>
    </div>
  </Modal>
);

EventModal.propTypes = {
  title: React.PropTypes.string,
  startDate: React.PropTypes.string,
  endDate: React.PropTypes.string,
  hideModal: React.PropTypes.func,
  deleteEvent: React.PropTypes.func,
  isOpen: React.PropTypes.bool,
  onClose: React.PropTypes.func
};

export default EventModal;