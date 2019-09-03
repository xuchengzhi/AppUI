import axios from 'axios'
export const test = 'http://192.168.248.188';
// 登录
// export const requestLogin = params => { return axios.post('/', params).then(res => res.data) }
export const device = () => { return axios.get('v1/thrift/device').then(res => res.data) }
export const adb = () => { return axios.get('v1/thrift/adb').then(res => res.data) }
export const atx = () => { return axios.get('v1/thrift/atx').then(res => res.data) }
export const act_run = () => { return axios.get('v1/thrift/actrun').then(res => res.data) }
export const devupdate = () => { return axios.get('v1/thrift/devup').then(res => res.data) }
export const orders = () => { return axios.get('v1/thrift/order').then(res => res.data) }

export const ThriftJavaServer = () => { return axios.get('v1/thrift/ThriftJavaServer').then(res => res.data) } 

export const ThriftAtxServer = () => { return axios.get('v1/thrift/ThriftAtxServer').then(res => res.data) }

export const ThriftAdbServer = () => { return axios.get('v1/thrift/ThriftAdbServer').then(res => res.data) }

export const ThriftActServer = () => { return axios.get('v1/thrift/ThriftActServer').then(res => res.data) }