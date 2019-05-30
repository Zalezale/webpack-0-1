import common from './common'
import common1 from './common1'
let b = ''
let c = { text: '' }

//这是个异步的方法，注意运算结果存在延时性
import(/* webpackChunkName: "math" */ './math').then((e) => {
    b = e.b
    b.then(item => {
        c.text += item 
        console.log(c)
    })
}).catch(error => 'An error occurred while loading the component');
export default function add() {
    return c
}