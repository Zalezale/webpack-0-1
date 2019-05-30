import './style.less'
import common from './common'
import common1 from './common1'
import add from './print'
import _ from 'lodash'
function component(a) {
    let element = document.createElement('div');
    element.innerHTML = '大爬虫' + a + add().text;
    setTimeout(() => {
        element.innerHTML = '大爬虫' + a + add().text + _.join('111', '222')
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