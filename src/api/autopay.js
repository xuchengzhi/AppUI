import axios from 'axios'
export const test = 'http://192.168.248.188';
// 登录
// export const requestLogin = params => { return axios.post('/', params).then(res => res.data) }
export const device = () => { return axios.get('v1/thrift/device').then(res => res.data) }
export const adb = () => { return axios.get('v1/thrift/adb').then(res => res.data) }
export const atx = () => { return axios.get('v1/thrift/atx').then(res => res.data) }
export const act_run = params => { return axios.post('v1/thrift/actrun',params).then(res => res.data) }
export const devupdate = () => { return axios.get('v1/thrift/devup').then(res => res.data) }
export const orders = () => { return axios.get('v1/thrift/order').then(res => res.data) }

export const ThriftJavaServer = () => { return axios.get('v1/thrift/ThriftJavaServer').then(res => res.data) } 

export const ThriftAtxServer = () => { return axios.get('v1/thrift/ThriftAtxServer').then(res => res.data) }

export const ThriftAdbServer = () => { return axios.get('v1/thrift/ThriftAdbServer').then(res => res.data) }

export const ThriftActServer = () => { return axios.get('v1/thrift/ThriftActServer').then(res => res.data) }

export const addcard = params => { return axios.post('v1/autopay/addcard',params).then(res => res.data) }

export const orderlist = params => { return axios.post('v1/autopay/orderlist',params).then(res => res.data) }


export const addjob = params => { return axios.post('v1/autopay/addjob',params).then(res => res.data) }

export const getcloudfont = params => { return axios.post('v1/photo/getcloudfont',params).then(res => res.data) }

export const TIFlist = params => { return axios.post('v1/autopay/TIFList',params).then(res => res.data) }
// 安装字体记录

export const TIFSearch = params => { return axios.post('v1/autopay/TIFSearch',params).then(res => res.data) }

export const BuildCFont = params => { return axios.post('v1/photo/BuildCFont',params).then(res => res.data) }

