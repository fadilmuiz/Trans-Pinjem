/* eslint-disable arrow-body-style */
import config from '@config/index';
import { merge } from 'lodash';
import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  users: '/users/register',
  login: '/users/login',
  getAll: '/api/all',
  payment: '/api/midtrans',
  detail: '/api/detail',
  addTrans: '/adm/add-trans',
  editTrans: '/adm/edit-trans',
  delete: '/adm/del-trans'
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const register = (data) => callAPI(urls.users, 'POST', {}, {}, data);
export const login = (data) => callAPI(urls.login, 'POST', {}, {}, data);
export const paymentApi = (data) => callAPI(urls.payment, 'POST', {}, {}, data);
export const fetchApi = () => callAPI(urls.getAll, 'GET');
export const fetchDetail = (id) => callAPI(`${urls.detail}/${id}`, 'GET');
export const addTransApi = (data) => callAPI(urls.addTrans, 'POST', {}, {}, data)
export const editTrans = ({ formDataObj, id_trans }) =>   callAPI(`${urls.editTrans}/${id_trans}`, 'PUT', {}, {}, formDataObj)
export const deleteTransApi = (id) => callAPI(`${urls.delete}/${id}`, 'DELETE');
export const ping = () => callAPI(urls.ping, 'get');
