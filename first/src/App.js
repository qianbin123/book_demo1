import React, { Component } from 'react';
// import ClickCounter from './component/demo1/ClickCounter';
// import ControlPanel from './component/demo1/ControlPanel';
// import Parent from './component/demo2/Parent'
// import ControlPanel from './component/demo3_flux/views/ControlPanel';
// import ControlPanel from './component/demo4_redux/views/ControlPanel';
// import ControlPanel from './component/demo5_redux_smart/views/ControlPanel';
// import ControlPanel from './component/demo6_redux_context/views/ControlPanel';
// import store from './component/demo6_redux_context/Store.js';
// import Provider from './component/demo6_redux_context/Provider';

import ControlPanel from './component/demo7_react_redux/views/ControlPanel';
import store from './component/demo7_react_redux/Store.js';
import {Provider} from 'react-redux';


export default class App extends Component {
    
    render(){
        return(
            //demo1-5
            // <div >
            //     {
            //     //<ClickCounter />
            //     //<Parent />
            //     //<ControlPanel />
            //     }
            // </div>
            //demo6-7
            <Provider store={store}>
                <ControlPanel />
            </Provider>
        )
    }
}