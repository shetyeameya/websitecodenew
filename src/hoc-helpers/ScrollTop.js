import { Component } from 'react';
import ReactDOM from 'react-dom';

class ScrollTop extends Component {
  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  render() {
    return this.props.children;
  }
}

export default ScrollTop;
