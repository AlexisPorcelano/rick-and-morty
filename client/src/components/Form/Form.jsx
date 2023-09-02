import React, { useState } from 'react';
import Validations from './validations';
import Styles from './Form.module.css'

function Form(props) {

  function openFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  const appContainer = document.documentElement

  const [userData, setUserData] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.logIn(userData)
    setUserData({ email: '', password: '' });
    openFullscreen(appContainer)
  };

  return (
    <div className={Styles.container} >
    <form className={Styles.Form} onSubmit={handleSubmit}>
      <label  className={Styles.email}>
        Email:
        <input className={Styles.emailIn}
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </label >
      <br />
      <label className={Styles.password}>
        Password:
        <input className={Styles.passwordIn}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className={Styles.btn} type="submit" onClick={handleSubmit} >Log In</button>
      <Validations className= {Styles.val} email={userData.email} password={userData.password} />
    </form>
    </div>
  );
}

export default Form;
