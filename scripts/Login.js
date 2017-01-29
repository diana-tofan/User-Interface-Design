import React from 'react';
import App from './App';
import styles from '../styles/Login.css';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const self = this;
    event.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    users.forEach(user => {
        if (username === user.username && password === user.password) {
            this.state.error = null;
            this.context.router.push('/');
          return <App />
        }
        else {
          this.setState({
            error: 'Invalid username and password!'
          })
        }
      }
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <i className={`fa fa-graduation-cap fa-lg ${styles.logo}`} />
          Student Portal</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className={styles.input} placeholder="Username" ref="username"/><br/>
          <input type="text" className={styles.input} placeholder="Password" ref="password"/><br/>
          <input type="submit" value="Login" className={styles.button}/>
        </form>
        <span className={styles.error}>{this.state.error}</span>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};
