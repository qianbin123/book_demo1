import React, { Component } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo'; 
/*
    尝试prop被改变
*/
export default class Parent extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            content:{
                name:"Qbin"
            }
        };
    }

    render(){
        return(
            <div>
                <ChildOne obj={this.state.content}/>
                <ChildTwo obj={this.state.content}/>
            </div>
        )
    }
}