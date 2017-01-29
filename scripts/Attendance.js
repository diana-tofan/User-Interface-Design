import React from 'react';
import styles from '../styles/Attendance.css';

class Attendance extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let i = 0;
    return (
      <div className={styles.right}>
        <div className={styles.percentage}>
          <i className={`fa fa-user fa-2x ${styles.userIcon}`} />
          <div className={styles.info}>
            <strong>85% attendance over the last 90 days</strong><br/>
            You've attended {attendance.length - 3} of {attendance.length} scheduled events (3 absences).
          </div>
        </div>
        <div className={styles.containerFluid}>
          <div className={styles.header} >
            <div className={styles.teacherColumn}>Teacher</div>
            <div className={styles.eventColumn}>Event</div>
            <div className={styles.timeColumn}>Time</div>
            <div className={styles.attendanceColumn}>Attendance</div>
          </div>
          {
            attendance.map(item => {
                i++;
                return (
                  <div className={styles.tableRow} key={`attendance${i}`}>
                    <div className={styles.teacherColumn}>{item.teacher}</div>
                    <div className={styles.eventColumn}>{item.event}</div>
                    <div className={styles.timeColumn}>{item.time}</div>
                    <div className={styles.attendanceColumn}>{item.attendance}</div>
                  </div>
                )
              }
            )
          }
        </div>
      </div>
    )
  }
}

export default Attendance;