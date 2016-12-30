import React from 'react';
import styles from '../styles/Grades.css';

export default class Grades extends React.Component {
  const
  className = `fa fa-check ${styles.checkmark}`;
  render() {
    console.log(grades);
    return (
      <div className={styles.containerFluid}>
        <div className={`${styles.tableRow} ${styles.header}`} >
          <div className={styles.postedColumn}>Posted</div>
          <div className={styles.courseColumn}>Course</div>
          <div className={styles.assignmentColumn}>Assignment</div>
          <div className={styles.scoreColumn}>Score</div>
          <div className={styles.totalColumn}>Total</div>
          <div className={styles.statusColumn}>Status</div>
        </div>
        {
          grades.map(grade =>
            <div className={styles.tableRow}>
              <div className={styles.postedColumn}>{grade.posted}</div>
              <div className={styles.courseColumn}>{grade.course}</div>
              <div className={styles.assignmentColumn}>{grade.assignment}</div>
              <div className={styles.scoreColumn}>{grade.score}</div>
              <div className={styles.totalColumn}>{grade.total}</div>
              <div className={styles.statusColumn}>{grade.status}
              <i className="fa fa-check" aria-hidden="true"/></div>
            </div>
          )
        }
      </div>
    )
  }
}