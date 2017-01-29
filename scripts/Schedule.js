import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { ToastContainer, ToastMessage } from 'react-toastr';
import EventModal from './EventModal';
import EventAddModal from './EventAddModal';
import styles from '../styles/Schedule.css';

BigCalendar.momentLocalizer(moment);

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

export default class Schedule extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.eventStyleGetter = this.eventStyleGetter.bind(this);
    this.state = {
      isEventModalOpen: false,
      isEventAddModalOpen: false,
      selectedEvent: null,
      slotInfo: null
    };
    this.closeEventModal = this.closeEventModal.bind(this);
    this.closeEventAddModal = this.closeEventAddModal.bind(this);
    this.toastAdd = this.toastAdd.bind(this);
    this.toastDelete = this.toastDelete.bind(this);
  }

  eventStyleGetter(event) {
    var backgroundColor = '#' + event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      border: '0px',
      display: 'block'
    };
    return {
      style: style
    };
  }

  openEventModal(event) {
    this.setState({
      isEventModalOpen: true,
      selectedEvent: event
    });
  }

  closeEventModal() {
    this.setState({
      isEventModalOpen: false,
      selectedEvent: null
    });
    this.context.router.push('/schedule');
  }

  openEventAddModal(slotInfo) {
    this.setState({
      isEventAddModalOpen: true,
      slotInfo
    });
  }

  closeEventAddModal() {
    this.setState({
      isEventAddModalOpen: false,
      slotInfo: null
    });
    this.context.router.push('/schedule');
  }

  deleteEvent(title) {
    for (var i = 0; i < events.length; i++) {
      if (events[i].title === title) {
        events.splice(i, 1);
        break;
      }
    }
    this.closeEventModal();
    this.refs.container.success(`The event was deleted from your schedule.`, `Success`, {
      closeButton: true,
      timeOut: 2500
    });
  }

  toastAdd(){
    this.refs.container.success(`The event was added to your schedule.`, `Success`, {
      closeButton: true,
      timeOut: 2500
    });
  }

  toastDelete(){
    this.refs.container.success(`The event was deleted from your schedule.`, `Success`, {
      closeButton: true,
      timeOut: 2500
    });
  }

  render() {

    return (
      <div className={styles.calendar}>
        {this.state.selectedEvent &&
        <EventModal
          title={this.state.selectedEvent.title}
          startDate={`${this.state.selectedEvent.start.getDay()}/${this.state.selectedEvent.start.getMonth() + 1}/${this.state.selectedEvent.start.getFullYear()}`}
          endDate={`${this.state.selectedEvent.end.getDay()}/${this.state.selectedEvent.end.getMonth() + 1}/${this.state.selectedEvent.end.getFullYear()}`}
          hideModal={this.closeEventModal}
          deleteEvent={() => this.deleteEvent(this.state.selectedEvent.title)}
          isOpen={this.state.isEventModalOpen}
          onClose={this.closeEventModal}
        />
        }
        {this.state.slotInfo &&
        <EventAddModal
          start={new Date(this.state.slotInfo.start).toDateString()}
          isOpen={this.state.isEventAddModalOpen}
          onClose={this.closeEventAddModal}
          addToaster={this.toastAdd}
        />
        }
        <BigCalendar
          culture='en-GB'
          selectable
          events={events}
          defaultView='month'
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date}
          onSelectEvent={event => {
            this.openEventModal(event);
          }}
          onSelectSlot={(slotInfo) => {
            this.openEventAddModal(slotInfo);
          }}
          startDate={new Date(1970, 1, 1, 6)}
          endDate={new Date}
          timeslots={10}
          eventPropGetter={this.eventStyleGetter}
        />
        <ToastContainer
          toastMessageFactory={ToastMessageFactory}
          ref="container"
          className="toast-bottom-right"
        />
      </div>
    )
  }
}

Schedule.contextTypes = {
  router: React.PropTypes.object.isRequired
};
