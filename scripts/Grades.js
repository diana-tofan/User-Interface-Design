import React from 'react';
import styles from '../styles/Grades.css';

export default class Grades extends React.Component {

  render() {
    let i = 0;
    return (
      <div className={styles.containerFluid}>
        <div className={styles.header} >
          <div className={styles.postedColumn}>Posted</div>
          <div className={styles.courseColumn}>Course</div>
          <div className={styles.assignmentColumn}>Assignment</div>
          <div className={styles.scoreColumn}>Score</div>
          <div className={styles.totalColumn}>Total</div>
          <div className={styles.statusColumn}>Status</div>
        </div>
        {
          grades.map(grade => {
            i++;
            return (
              <div className={styles.tableRow} key={`grade${i}`}>
                <div className={styles.postedColumn}>{grade.posted}</div>
                <div className={styles.courseColumn}>{grade.course}</div>
                <div className={styles.assignmentColumn}>{grade.assignment}</div>
                <div className={styles.scoreColumn}>{grade.score}</div>
                <div className={styles.totalColumn}>{grade.total}</div>
                <div className={styles.statusColumn}>{grade.status}
                  {
                    grade.score >= 50 ?
                      <i className={`fa fa-check ${styles.checkmark}`} aria-hidden="true"/> :
                      <i className={`fa fa-times ${styles.failed}`} aria-hidden="true"/>
                  }
                </div>
              </div>
            )
            }
          )
        }
      </div>
    )
  }
}