import './style.less'
import add from './print'
function component(a) {
    let element = document.createElement('div');
    element.innerHTML = '大爬虫' + add();
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