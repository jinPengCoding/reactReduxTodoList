//创建store代码存放的位置
// 什么都不知道 需要一个辅助
import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer);
export default store;
