import './style.less'
import add from './print'
function component() {
    let element = document.createElement('div');
    add()
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = '大爬虫';

    return element;
}

document.body.appendChild(component());
if (module.hot) {
    module.hot.accept('./print.js', function () {
        window.location.reload()
    })
}