import React from 'react';
import styles from '../styles/Modal.css';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(event) {
    event.preventDefault();
    if(this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (!this.props.isOpen)
      return null;
    return (
      <div>
        <div className={styles.modal}>
          {this.props.children}
        </div>
        <div className={styles.backdrop} onClick={this.closeModal}></div>
      </div>
    );
  }
}