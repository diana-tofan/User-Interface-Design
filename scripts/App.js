import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Calendar from 'rc-calendar';
import { ToastContainer, ToastMessage } from 'react-toastr';
import { PieChart } from 'react-chartkick';
import styles from '../styles/App.css';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

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
    this.saveDetails = this.saveDetails.bind(this);
    this.state = {
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: false,
      homepage: true,
      name: '',
      address: '',
      birthdate: '',
      department: '',
      year: '',
      subject: '',
      hobbies: ''
    }
  }

  redirectToHomePage() {
    this.context.router.push('/');
    this.setState({
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: false,
      homepage: true
    });
  }

  redirectToGradesPage() {
    this.context.router.push('/grades');
    this.setState({
      gradesSelected: true,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: false,
      homepage: false
    });
  }

  redirectToSchedulePage() {
    this.context.router.push('/schedule');
    this.setState({
      gradesSelected: false,
      scheduleSelected: true,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: false,
      homepage: false
    });
  }

  redirectToTasksPage() {
    this.context.router.push('/tasks');
    this.setState({
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: true,
      examsSelected: false,
      attendanceSelected: false,
      homepage: false
    });
  }

  redirectToExamsPage() {
    this.context.router.push('/exams');
    this.setState({
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: true,
      attendanceSelected: false,
      homepage: false
    });
  }

  redirectToAttendancePage() {
    this.context.router.push('/attendance');
    this.setState({
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: true,
      homepage: false
    });
  }

  logout() {
    this.context.router.push('/login');
    this.setState({
      gradesSelected: false,
      scheduleSelected: false,
      tasksSelected: false,
      examsSelected: false,
      attendanceSelected: false,
      homepage: false
    });
  }

  saveDetails() {
    if (this.state.name !== '')
      users[0].name = this.state.name;
    if (this.state.address !== '')
      users[0].address = this.state.address;
    if (this.state.birthdate !== '')
      users[0].birthdate = this.state.birthdate;
    if (this.state.department !== '')
      users[0].department = this.state.department;
    if (this.state.year !== '')
      users[0].yearOfStudy = this.state.year;
    if (this.state.subject !== '')
      users[0].favoriteSubjects = this.state.subject;
    if (this.state.hobbies !== '')
      users[0].hobbies = this.state.hobbies;
    this.refs.container.success(`Your details were updated.`, `Success`, {
      closeButton: true,
      timeOut: 2500
    });
  }

  render() {
    const gradesClass = this.state.gradesSelected ? `${styles.menuItem} ${styles.selected}` : styles.menuItem;
    const scheduleClass = this.state.scheduleSelected ? `${styles.menuItem} ${styles.selected}` : styles.menuItem;
    const tasksClass = this.state.tasksSelected ? `${styles.menuItem} ${styles.selected}` : styles.menuItem;
    const examsClass = this.state.examsSelected ? `${styles.menuItem} ${styles.selected}` : styles.menuItem;
    const attendanceClass = this.state.attendanceSelected ? `${styles.menuItem} ${styles.selected}` : styles.menuItem;
    const data = [
      ["Projects", 35],
      ["Exams", 45],
      ["Lab test", 20],
    ];
    const options = {
      animateScale: true
    };

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
            {this.state.homepage &&
            <div className={styles.partition}>
              <div className={styles.firstHalf}>
                <div className={styles.personalInfo}>
                  <div className={styles.title}>Personal info:</div>
                  <div className={styles.form}>
                    <div className={styles.row}>
                      <div className={styles.infoLabel}>Name:
                      </div>
                      <input type="text" onChange={(event) => {
                        this.setState({
                          name: event.target.value
                        })
                      }} className={styles.textInput} name="name" defaultValue={users[0].name} />
                    </div>
                    <br/>
                    <div className={styles.row}>
                      <div className={styles.infoLabel}>Address:
                      </div>
                      <input type="text" onChange={(event) => {
                        this.setState({
                          address: event.target.value
                        })
                      }}  className={styles.textInput}  name="address" defaultValue={users[0].address} />
                    </div>
                    <br/>
                    <div className={styles.row}>
                      <div className={styles.infoLabel}>Birthdate:
                      </div>
                      <input type="text" onChange={(event) => {
                        this.setState({
                          birthdate: event.target.value
                        })
                      }} className={styles.textInput}  name="birthdate" defaultValue={users[0].birthdate} />
                    </div>
                    <br/>
                    <div className={styles.row}>
                      <div className={styles.infoLabel}>Department:
                      </div>
                      <input type="text" onChange={(event) => {
                        this.setState({
                          department: event.target.value
                        })
                      }} className={styles.textInput} name="department" defaultValue={users[0].department} />
                    </div>
                    <br/>
                    <div className={styles.row}>
                      <div className={styles.infoLabel}>Year of study:
                      </div>
                      <input type="text" onChange={(event) => {
                        this.setState({
                          year: event.target.value
                        })
                      }} className={styles.textInput} name="yearOfStudy" defaultValue={users[0].yearOfStudy} />
                    </div>
                    <br/>
                    <div className={styles.row}>
                      <div className={styles.infoLabel}>Favorite subjects:
                      </div>
                      <input type="text" onChange={(event) => {
                        this.setState({
                          subject: event.target.value
                        })
                      }} className={styles.textInput} name="favoriteSubjects" defaultValue={users[0].favoriteSubjects} />
                    </div>
                    <br/>
                    <div className={styles.row}>
                      <div className={styles.infoLabel}>Hobbies:
                      </div>
                      <input type="text" onChange={(event) => {
                        this.setState({
                          hobbies: event.target.value
                        })
                      }} className={styles.textInput} name="hobbies" defaultValue={users[0].hobbies} />
                    </div>
                    <br/>
                    <button name="Save" value="Save" onClick={this.saveDetails} className={styles.saveButton}>Save</button>
                  </div>
                </div>
                <ToastContainer
                  toastMessageFactory={ToastMessageFactory}
                  ref="container"
                  className="toast-bottom-right"
                />
              </div>
              <div className={styles.secondHalf}>
                <div className={styles.title}>Events this month:</div>
                <PieChart data={data} />
              </div>
              <div className={styles.thirdHalf}>
                <Calendar showToday="true" timeslots={10}/>
                <br/><br/><div>
                <strong>Events today:</strong>
                <ul className={styles.eventsToday}>
                  {
                    events.map(event => {
                      if (event.start.getDay() === new Date().getDay())
                        return (<li>{event.title}</li>)
                    })
                  }
                  You have no recurring events today.
                </ul>
              </div>
              </div>
            </div>
            }
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

//