/* eslint-disable jsx-a11y/label-has-associated-control */
import { connect, useDispatch } from 'react-redux';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { createStructuredSelector } from 'reselect';
// import { HeadTitle } from '../../components';
import { addTransRequest } from './actions';
import { TextField } from '@mui/material';
// import { selectUser, selectError } from '@containers/Client/selectors';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './formAdd.module.scss';

const FormAdd = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    type: '',
    des: '',
    facility: '',
    pWeek: '',
    pDay: '',
    categoryId: '',
  });

  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formDataObj = new FormData();
    formDataObj.append('type', formData.type);
    formDataObj.append('des', formData.des);
    formDataObj.append('facility', formData.facility);
    formDataObj.append('pWeek', formData.pWeek);
    formDataObj.append('pDay', formData.pDay);
    formDataObj.append('categoryId', formData.categoryId);
    formDataObj.append('image', file);
    dispatch(addTransRequest(formDataObj));
  };
  return (
    <div className={styles.container}>
      <div className={styles.conForm}>
        <form className={styles.form} onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>New Trans</h1>
          <div style={{ display: 'flex', paddingBottom: '20px' }}>
            <TextField
              name="type"
              id="outlined-type-input"
              label="Type"
              autoComplete="current-type"
              value={formData.type}
              onChange={handleChange}
            />
            {/* {errorData && <div className={styles.error}>{errorData}</div>} */}
            <TextField
              name="des"
              id="outlined-description-input"
              label="Description"
              autoComplete="current-description"
              value={formData.des}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: 'flex', paddingBottom: '20px' }}>
            <TextField
              id="outlined-facility-input"
              name="facility"
              label="Facility"
              autoComplete="current-facility"
              value={formData.facility}
              onChange={handleChange}
            />
            <TextField
              id="outlined-pWeek-input"
              name="pWeek"
              label="Price/weekly"
              autoComplete="current-pWeek"
              value={formData.pWeek}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: 'flex', paddingBottom: '20px' }}>

            <TextField
              id="outlined-pDay-input"
              name="pDay"
              label="Price/Daily"
              autoComplete="current-pDay"
              value={formData.pDay}
              onChange={handleChange}
            />
            <FormControl sx={{ minWidth: 240 }} >
              <Select
                value={formData.categoryId}
                onChange={handleChange}
                name="categoryId"
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>Category</em>
                </MenuItem>
                <MenuItem value={1}>Motor</MenuItem>
                <MenuItem value={2}>Mobil</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ display: 'flex' }}>
            <TextField
              id="outlined-image-input"
              name="image"
              label="image"
              autoComplete="current-image"
              value={formData.image}
              onChange={handleFileChange}
              type="file"
            />
          </div>
          <button className={styles.bottonSub} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAdd

// RegisterPage.propTypes = {
//   userData: PropTypes.object,
//   errorData: PropTypes.string,
// };

// const mapStateToProps = createStructuredSelector({
//   userData: selectUser,
//   errorData: selectError,
// });
// export default connect(mapStateToProps)(RegisterPage);