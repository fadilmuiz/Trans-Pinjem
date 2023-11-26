import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import Card from '@components/Card/Card';
import ContentPasteSearchRoundedIcon from '@mui/icons-material/ContentPasteSearchRounded';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectTrans } from './selectors';
import { fetchDataRequest } from './actions';
import classes from './home.module.scss';

const Home = ({ trans }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTrans, setFilteredTrans] = useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  const handleSearch = () => {
    const filtered = trans.trans.filter(el =>
      el.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrans(filtered);
  };
  return (
    <div>

      {trans?.user?.role === "admin" ? (
        <div className={classes.conHome}>
          <div className={classes.conSearch}>
            <input className={classes.search} type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ContentPasteSearchRoundedIcon onClick={handleSearch}/>
          </div>
          <div className={classes.button_create} >
            <p className={classes.button} onClick={() => navigate('/add-trans')} >Create</p>
          </div>
          <div className={classes.conGrid}>
            {filteredTrans.length > 0
              ? filteredTrans.map((el) => (
                <Card
                  key={el.id}
                  id={el.id}
                  type={el.type}
                  des={el.des}
                  img={el.image}
                  facility={el.facility}
                  pDay={el.pDay}
                  pWeek={el.pWeek}
                  role={trans?.user?.role}
                />
              ))
              : trans?.trans?.map((el) => (
                <Card
                  key={el.id}
                  id={el.id}
                  type={el.type}
                  des={el.des}
                  img={el.image}
                  facility={el.facility}
                  pDay={el.pDay}
                  pWeek={el.pWeek}
                  role={trans?.user?.role}
                />
              ))}
          </div>
        </div>) : (
        // Client
        <div className={classes.conHome}>
          <div className={classes.conSearch}>
            <input className={classes.search} type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ContentPasteSearchRoundedIcon onClick={handleSearch}/>
          </div>
          <div className={classes.conGrid}>
            {filteredTrans.length > 0
              ? filteredTrans.map((el) => (
                <Card
                  key={el.id}
                  id={el.id}
                  type={el.type}
                  des={el.des}
                  img={el.image}
                  facility={el.facility}
                  pDay={el.pDay}
                  pWeek={el.pWeek}
                  role={trans?.user?.role}
                />
              ))
              : trans?.trans?.map((el) => (
                <Card
                  key={el.id}
                  id={el.id}
                  type={el.type}
                  des={el.des}
                  img={el.image}
                  facility={el.facility}
                  pDay={el.pDay}
                  pWeek={el.pWeek}
                  role={trans?.user?.role}
                />
              ))}
          </div>
        </div>
      )}
    </div >
  );
};

Home.propTypes = {
  trans: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  trans: selectTrans,
});

export default connect(mapStateToProps)(Home);
