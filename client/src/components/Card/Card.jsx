/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AssistantIcon from '@mui/icons-material/Assistant';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductRequest } from '@pages/Home/actions';
import classes from './card.module.scss';

const Card = ({ id, type, des, img, facility, pDay, pWeek, role }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProductRequest(id))
  }
  return (
    <>
      {role === "admin" ? (
        <div className={classes.conCard}>
          <img className={classes.image} src={img} alt="" />
          <div className={classes.textdes}>
            <h6>{type}</h6>
            <p className={classes.description}>
              <DriveEtaIcon />{des}
            </p>
            <p className={classes.description}>
              <AssistantIcon />{facility}</p>
          </div>
          <div className={classes.price}>
            <p>{pDay} K/Day</p>
            <p>{pWeek} K/Week</p>
            <div className={classes.btn_adm}>
              <p className={classes.button1} onClick={() => navigate(`/edit-trans/${id}`)}>
                Edit
              </p>
              <p className={classes.button1} onClick={handleDelete}>
                Delete
              </p>
            </div>
          </div>
        </div >
      ) : (
        <div className={classes.conCard}>
          <img className={classes.image} src={img} alt="" />
          <div className={classes.textdes}>
            <h6>{type}</h6>
            <p className={classes.description}>
              <DriveEtaIcon />{des}
            </p>
            <p className={classes.description}>
              <AssistantIcon />{facility}</p>
          </div>
          <div className={classes.price}>
            <p>{pDay} K/Day</p>
            <p>{pWeek} K/Week</p>
            <p className={classes.button} onClick={() => navigate(`/detail/${id}`)}>
              Pesan Sekarang
            </p>
          </div>
        </div >
      )}
    </>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  facility: PropTypes.string.isRequired,
  pDay: PropTypes.number.isRequired,
  pWeek: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired
};

export default Card;