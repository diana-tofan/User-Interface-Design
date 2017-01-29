import React from 'react';
import Modal from './Modal';
import Slider from 'react-rangeslider';
import styles from '../styles/Modal.css';

class UpdateProgressModal extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value)  {
    this.setState({
      value
    });
  };

  updateProgress(props, task, value) {
    for (var i = 0; i < events.length; i++) {
      if (events[i].title === task.title) {
        events[i].progress = value;
      }
    }
    props.addToaster();
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
        <div className={styles.content}>
          <i className={`fa fa-times-circle fa-2x ${styles.closeIcon}`}
             onClick={this.props.onClose} />
          <div className={styles.eventTitle}>
            {this.props.taskName}
          </div>
          <div className={styles.slider}>
            <Slider
              value={this.state.value}
              orientation="horizontal"
              onChange={this.handleChange}
              min={0}
              max={100}
              step={10}
            />
            <div className={styles.subtitle}>Progress: {this.state.value}%</div>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.cancelButton} onClick={this.props.onClose}>
              Cancel
            </button>
            <button className={styles.updateButton} onClick={() => {
              this.updateProgress(this.props, this.props.task, this.state.value);
              this.props.onClose();
            }}>
              Update
            </button>
          </div>
        </div>
      </Modal>
    )
  }
}

export default UpdateProgressModal;