import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.panes = this.props.panes;
    // this.content = this.props.panes.content;
    this.state = {
      index: 0
    };
  }
  
  render() {
    <ul>
      <h1 onClick={ () => this.setState({index: currentIdx}) }> <article>   </article></h1>
      <h1><article>   </article></h1>
      <h1><article>   </article></h1>
    </ul>;
  }
}

// make header conponent part of our functional component;
// 

export default Tabs;