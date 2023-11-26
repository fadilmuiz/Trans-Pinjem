/* eslint-disable jsx-a11y/label-has-associated-control */
import { connect, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
// import { HeadTitle } from '../../components';
import { registerRequest } from '@containers/Client/actions';
import { TextField } from '@mui/material';
import { selectUser, selectError } from '@containers/Client/selectors';
import styles from './register.module.scss';

const RegisterPage = ({ userData, errorData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerRequest(formData));
  };
  return (
    <div className={styles.container}>
      <div className={styles.conForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Register</h1>
          <TextField
            name="username"
            id="outlined-username-input"
            label="Username"
            autoComplete="current-password"
            value={formData.username}
            onChange={handleChange}
          />
          {errorData && <div className={styles.error}>{errorData}</div>}
          <br />
          <TextField
            style={{ marginTop: '20px', marginBottom: '20px' }}
            name="email"
            id="outlined-email-input"
            label="Email"
            autoComplete="current-password"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <TextField
            id="outlined-password-input"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <button className={styles.bottonSub} type="submit">
            Sign In
          </button>
          <p>Do you have an account?..</p>
          <p style={{color: 'red', borderBottom: '1px solid '}} onClick={() => navigate('/login')}>login here</p>
        </form>
      </div>
    </div>
  );
};
RegisterPage.propTypes = {
  userData: PropTypes.object,
  errorData: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  userData: selectUser,
  errorData: selectError,
});
export default connect(mapStateToProps)(RegisterPage);
