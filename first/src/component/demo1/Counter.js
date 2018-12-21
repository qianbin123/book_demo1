import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initValue
        }
        // console.log('enter constructor' + this.props.caption)
    }

    // componentWillMount(){
    //     console.log('enter componentWillMount' + this.props.caption)
    // }

    // conponentDidMount(){
    //     console.log('enter conponentDidMount' + this.props.caption)
    // }


    // onClickIncrementButton(){
    //     this.setState(
    //         {
    //             count:this.state.count + 1
    //         }
    //     )
    // }

    // onClickDecrementButton(){
    //     this.setState(
    //         {
    //             count:this.state.count - 1
    //         }
    //     )
    // }

    // componentWillReceiveProps(nextProps){
    //     console.log('enter componentWillReceiveProps' + this.props.caption);
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    // }

    onClickIncrementButton(){
        this.updateCount(true)
    }

    onClickDecrementButton(){
        this.updateCount(false)
    }

    updateCount(isIncrement){
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        this.setState({
            count: newValue
        })
        this.props.onUpdate(newValue,previousValue);
    }

    render(){
        const { caption } = this.props;
        // console.log('enter render' + this.props.caption)
        return(
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count:{this.state.count}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f=>f
}



