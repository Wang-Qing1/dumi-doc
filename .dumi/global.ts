import Prism from 'prism-react-renderer/prism';

(typeof global !== 'undefined' ? global : window).Prism = Prism;
// 用于添加其它语法的高亮
require('prismjs/components/prism-java.js');
require('prismjs/components/prism-python.js');
