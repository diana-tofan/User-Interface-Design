import React from 'react'
import Progress from 'react-progressbar';
import { ToastContainer, ToastMessage } from 'react-toastr';
import UpdateProgressModal from './UpdateProgressModal';
import styles from '../styles/Tasks.css';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class Tasks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      task: null,
    };
    this.closeModal = this.closeModal.bind(this);
    this.addToaster = this.addToaster.bind(this);
  }

  openModal(task) {
    this.setState({
      isModalOpen: true,
      task,
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
      task: null,
    });
    this.context.router.push('/tasks');
  }

  updateProgress(task, progress) {
    task.progress = progress;
  }

  addToaster() {
    this.refs.container.success(`The task was updated.`, `Success`, {
      closeButton: true,
      timeOut: 2500
    });
  }

  render() {
    let i = 0;
    return (
      <div className={styles.tasks}>
        {
          this.state.isModalOpen &&
          <UpdateProgressModal
            isOpen={this.state.isModalOpen}
            onClose={this.closeModal}
            task={this.state.task}
            value={this.state.task.progress}
            taskName={this.state.task.title}
            addToaster={this.addToaster}
          />
        }
        {
          events.map(event => {
              i++;
              return (
                <div key={`event${i}`} className={styles.task}>
                  <span className={styles.taskName}>
                  <strong>{event.title}</strong>
                  </span>
                  <div className={styles.progress}
                       onClick={() => this.openModal(event)}>
                    <Progress
                      completed={event.progress}
                      color={event.hexColor}/>
                  </div>
                  <span className={styles.progressInfo}>
                    Progress: {event.progress}%
                  </span>
                </div>
              )
            }
          )
        }
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref="container"
          className="toast-bottom-right"
        />
      </div>
    )
  }
}

Tasks.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Tasks;