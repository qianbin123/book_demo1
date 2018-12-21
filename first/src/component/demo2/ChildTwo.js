import React, { Component } from 'react';

export default class ChildTwo extends Component {
    constructor(props){
        super(props);
        this.onClickChange = this.onClickChange.bind(this);
    }

    onClickChange(){
        console.log(this.props.obj)
    }

    render(){
        return(
            <div>
                <button onClick={this.onClickChange}>ChildTwo</button>
            </div>
        )
    }
}