import { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);

// class ScrollTop extends Component {
//   componentDidUpdate() {
//     ReactDOM.findDOMNode(this).scrollIntoView();
//   }
