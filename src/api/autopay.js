import axios from 'axios'
export const test = 'http://192.168.248.188';
// 登录
// export const requestLogin = params => { return axios.post('/', params).then(res => res.data) }
export const device = () => { return axios.get('api/device').then(res => res.data) }
export const adb = () => { return axios.get('api/adb').then(res => res.data) }
export const atx = () => { return axios.get('api/atx').then(res => res.data) }
export const act_run = (apps) => { return axios.get('api/act_run/'+apps).then(res => res.data) }
export const devupdate = () => { return axios.get('api/dev_up').then(res => res.data) }
export const orders = () => { return axios.get('api/orders').then(res => res.data) }