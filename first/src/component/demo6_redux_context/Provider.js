import {Component} from 'react';
import PropTypes from 'prop-types';

export default class Provider extends Component {

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }

}

//让 Provider能够被React认可为一个 Context 的提供者
Provider.childContextTypes = {
  store: PropTypes.object
};
