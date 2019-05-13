import './style.less'

function component() {
    let element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = '大爬虫';

    return element;
}

document.body.appendChild(component());