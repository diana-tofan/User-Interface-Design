import React from 'react';
import styles from '../styles/Header.css';

const Header = (props) => (
  <div className={styles.header}>
    <div className={styles.content}>
      <div className={styles.title}>
        <i className={`fa fa-graduation-cap fa-lg ${styles.logo}`}
           onClick={props.redirectToHomePage}/>
        Student Portal
      </div>
      <div className={styles.logout} onClick={props.logout}>Logout</div>
    </div>
  </div>
);

Header.propTypes = {
  redirectToHomePage: React.PropTypes.func,
  logout: React.PropTypes.func
};

export default Header;