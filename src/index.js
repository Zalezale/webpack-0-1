import './style.less'

import add from './print'
import _ from 'lodash'
// import jq from 'jquery'
function component(a) {
    let element = document.createElement('div');
    element.innerHTML = '大爬虫' + a + add().text;
    setTimeout(() => {
        element.innerHTML = '大爬虫' + a + add().text + _.join('111', '222')
        // jq('div').each(item => {
        //     console.log(item)
        // })
    }, 3000);
    return element;
}

if (process.env.NODE_ENV !== 'production') {
    document.body.appendChild(component(1));
} else {
    document.body.appendChild(component(2));
}

//用于监控文件是否变化来实时更新
if (module.hot) {
    module.hot.accept('./print.js', function () {
        window.location.reload()
    })
}