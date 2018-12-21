import React, { Component } from 'react';
import Counter from './Counter'

export default class ControlPanel extends Component {

    constructor(props){
        super(props);

        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValue = [0,10,20];
        const initSum = this.initValue.reduce((a,b) => a+b);

        this.state = {
            sum:initSum
        }
    }

    onCounterUpdate(newValue, previousValue){
        const valueChange = newValue - previousValue;
        this.setState(
            {
                sum:this.state.sum + valueChange
            }
        )
    }

    render(){
        return(
            <div>
                <div>
                    <Counter caption="First" onUpdate={this.onCounterUpdate} ></Counter>
                    <Counter caption="Second" onUpdate={this.onCounterUpdate} initValue={this.initValue[1]}></Counter>
                    <Counter caption="Third" onUpdate={this.onCounterUpdate} initValue={this.initValue[2]}></Counter>
                    <hr/>
                    <div>Total Count: {this.state.sum}</div>
                </div>
            </div>
        )
    }
}










// {
//     //<Counter caption="First" initValue={0} ></Counter>
//     //<Counter caption="Second" initValue={10} ></Counter>
//     //<Counter caption="Third" initValue={20} ></Counter>
//     //<button onClick={()=>this.forceUpdate()}>
//     //    Click me to repaint!
//     //</button>
// }