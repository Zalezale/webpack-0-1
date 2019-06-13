import _ from 'lodash'


export const a = Promise.resolve('我没被使用'+ _.join('111', '222'))


export const b = Promise.resolve('我是被使用者'+ _.join('111', '222'))
