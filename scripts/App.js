import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/App.css';

export default class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.redirectToHomePage = this.redirectToHomePage.bind(this);
    this.redirectToGradesPage = this.redirectToGradesPage.bind(this);
    this.redirectToSchedulePage = this.redirectToSchedulePage.bind(this);
    this.redirectToTasksPage = this.redirectToTasksPage.bind(this);
    this.redirectToExamsPage = this.redirectToExamsPage.bind(this);
    this.redirectToAttendancePage = this.redirectToAttendancePage.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: false
    }
  }

  redirectToHomePage() {
    this.context.router.push('/');
    this.setState({
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: false
    });
  }

  redirectToGradesPage() {
    this.context.router.push('/grades');
    this.setState({
      gradesSelected: true,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: false
    });
  }

  redirectToSchedulePage() {
    this.context.router.push('/schedule');
    this.setState({
      gradesSelected: false,
      scheduleSelected: true,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: false
    });
  }

  redirectToTasksPage() {
    this.context.router.push('/tasks');
    this.setState({
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: true,
      examsSelected: false,
      attendanceSelected: false
    });
  }

  redirectToExamsPage() {
    this.context.router.push('/exams');
    this.setState({
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: true,
      attendanceSelected: false
    });
  }

  redirectToAttendancePage() {
    this.context.router.push('/attendance');
    this.setState({
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: true
    });
  }

  logout() {
    this.context.router.push('/login');
    this.setState({
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: false
    });
  }

  render() {
    const gradesClass = this.state.gradesSelected ? `${styles.menuItem} ${styles.selected}` : styles.menuItem;
    const scheduleClass = this.state.scheduleSelected ? `${styles.menuItem} ${styles.selected}` : styles.menuItem;
    const tasksClass = this.state.tasksSelected ? `${styles.menuItem} ${styles.selected}` : styles.menuItem;
    const examsClass = this.state.examsSelected ? `${styles.menuItem} ${styles.selected}` : styles.menuItem;
    const attendanceClass = this.state.attendanceSelected ? `${styles.menuItem} ${styles.selected}` : styles.menuItem;

    return (
      <div className={styles.wrapper}>
        <Header redirectToHomePage={this.redirectToHomePage} logout={this.logout} />
        <div className={styles.content}>
          <div className={styles.leftSidebar}>
            <div className={gradesClass} onClick={this.redirectToGradesPage}>Grades</div>
            <div className={scheduleClass} onClick={this.redirectToSchedulePage}>Schedule</div>
            <div className={tasksClass} onClick={this.redirectToTasksPage}>Tasks</div>
            <div className={examsClass} onClick={this.redirectToExamsPage}>Exams</div>
            <div className={attendanceClass} onClick={this.redirectToAttendancePage}>Attendance</div>
          </div>
          <div className={styles.rightArea}>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};
