import React, { Component } from 'react';

export default class ChildOne extends Component {
    constructor(props){
        super(props);
        this.onClickChange = this.onClickChange.bind(this);
    }

    onClickChange(){
        this.props.obj.name = "ChildOne改变Qbin"
    }

    render(){
        return(
            <div>
                <button onClick={this.onClickChange}>ChildOne</button>
                {console.log(this.props.obj)}
            </div>
        )
    }
}