import React from 'react';
import ReactDOM from 'react-dom';

class Tweet extends React.Component {
    render() {
      
      return (
        <li>{this.props.item.text}</li>
      );
    }
  }

  export default Tweet