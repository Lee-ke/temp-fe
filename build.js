const step1 = ['Git', 'GitHub', 'Markdown', '命令行', '编辑器', '语义化', '标签使用', 'Form 表单', '切图', '选择器', '常见样式', '浏览器调试', '盒模型', '浮动', '定位', '边距合并', '负边距', 'BFC', '居中', '常见布局', 'CSS兼容', '字体图标', '编码规范', '静态页面实战'];

const step2 = ['浏览器渲染机制', '运算符优先级', '函数声明', '函数表达式', '声明前置', '作用域链', '引用类型', 'ES5数组', 'IIFE 对象拷贝', '字符串/数组/Math/正则', 'DOM增删改查', '事件模型(冒泡', '捕获', '事件代理', '取消默认', ' BOM', ' 闭包', '服务器搭建', '动画', 'Ajax(Mock数据)', '跨域', 'jQuery DOM操作/属性操作/事件/Ajax', 'Promise', '日常效果实现'];

const step3 = ['原型', '原型链', '继承', 'this', '模块模式、发布订阅模式、Tab组件/轮播组件/曝光组件/事件管理模块封装、BootStrap源码解析', 'AMD/CMD/UMD规范', 'Require.js/R.js', 'Node入门', 'NPM使用(开发命令行工具)', '工程化(Gulp、NPM Script)', 'WebPack入门', 'Less', 'Flex布局', '移动端适配', 'HTTP头/状态码/缓存处理', 'Web安全', 'CSS3效果、PostCSS、JQuery源码解析', 'JQuery插件编写'];

const path = require('path');
const fse = require('fs-extra');

[step1, step2, step3].forEach((step, index) => {
    const target = path.join(__dirname, `docs/第 ${index + 1} 阶段`);
    step.forEach((filename, index) => {
        fse.ensureFileSync(path.join(target, `${index + 1}.${filename}.md`));
    });
});
