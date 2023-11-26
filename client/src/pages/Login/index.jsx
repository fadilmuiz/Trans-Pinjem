/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { selectToken } from '@containers/Client/selectors';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useDispatch, connect } from 'react-redux';
import { loginRequest } from '../../containers/Client/actions';
import styles from './login.module.scss';

const LoginPage = ({ token }) => {
  console.log(token);
  const navigate = useNavigate();
  const [inputForm, setInputForm] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(inputForm));
    // window.location.href = '/';
  };

  useEffect(() => {
    if (token) {
      window.location.href = '/';
    }
  }, [token]);
  return (
    <section className={styles.container}>
      <div className={styles.form__wrapper}>
        <div className={styles.title}>{/* HeadTitle component goes here */}</div>
        <form action="#" className={styles.form} onSubmit={handleSubmit}>
          <h1>login</h1>
          <div className={styles.input__wrapper}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input name="email" onChange={handleChange} value={inputForm.email} className={styles.input} />
          </div>
          <div className={styles.input__wrapper}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              name="password"
              onChange={handleChange}
              value={inputForm.password}
              type="password"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.btn__login}>
            {/* {loginState.loading ? 'Logging in...' : 'Login'} */}
            Sign in
          </button>
          <div className={styles.login__footer}>
            <span>Don't have an account? Click </span>
            <Link to="/register" className={styles.btn}>
              Here
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

LoginPage.propTypes = {
  token: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});
export default connect(mapStateToProps)(LoginPage);
// export default LoginPage
