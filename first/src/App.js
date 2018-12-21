import React, { Component } from 'react';
// import ClickCounter from './component/demo1/ClickCounter';
import ControlPanel from './component/demo1/ControlPanel';
// import Parent from './component/demo2/Parent'

export default class App extends Component {
    
    render(){
        return(
            <div >
                {
                //<ClickCounter />
                //<Parent />
                }
                <ControlPanel />
            </div>
        )
    }
}