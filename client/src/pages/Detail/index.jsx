import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import Card from '@components/Card/Card';
import { createStructuredSelector } from 'reselect';
import { selectDetail, selectPayment } from './selectors';
import { useParams } from 'react-router-dom';
import { fetchDetailRequest, paymentRequest } from './actions';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AssistantIcon from '@mui/icons-material/Assistant';
import classes from './detail.module.scss';

const Detail = ({ detailTrans, payment }) => {
  const { id_trans } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailRequest(id_trans));
  }, [id_trans]);

  const detail = detailTrans?.data

  const handlePayment1 = () => {
    dispatch(paymentRequest(detail.pDay));
  };
  const handlePayment2 = () => {
    dispatch(paymentRequest(detail.pWeek));
  };

  return (
      <div className={classes.conHome}>
        <div className={classes.conGrid}>
          <div className={classes.card}>
            <img className={classes.image} src={detail?.image} alt="" />
            <div className={classes.content} >
              <h1>{detail?.type}</h1>
              <h5><DriveEtaIcon />{detail?.des}</h5>
              <h5><AssistantIcon />{detail?.facility}</h5>
              <h4>WARNING !</h4>
              <p>> Kembalikan Tepat Waktu</p>
              <p>> jika ada kerusakan kena denda</p>
              <p>> Bensin diisi full ya ;)</p>
              <div className={classes.price}>
                <div>
                  <h3>{detail?.pDay}K/Day</h3>
                  <p className={classes.button} onClick={handlePayment1}>
                    Pesan
                  </p>
                </div>
                <div>
                  <h3>{detail?.pWeek}K/Week</h3>
                  <p className={classes.button} onClick={handlePayment2}>
                    Pesan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

Detail.propTypes = {
  detailTrans: PropTypes.object,
  payment: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  detailTrans: selectDetail,
  payment: selectPayment,
});

export default connect(mapStateToProps)(Detail);
