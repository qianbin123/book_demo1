import {createStore} from 'redux';
import reducer from './Reducer.js';

const initValues = {
    'First':0,
    'Second':10,
    'Third':20
}
const store = createStore(reducer,initValues);       //第一个参数表示更新状态的reducer，第二个参数表示状态的初始值，第三个参数可选
export default store;





