import React from 'react';

export default class Toggle extends React.Component{
  constructor (props) {
    super (props)
    this.handleToggle = this.handleToggle.bind(this)    
    this.state = {
      visible: false
    }
  }

  handleToggle = () => {
    this.setState ((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Toggle Play</h1>
        <button onClick={this.handleToggle}>{this.state.visible ? 'Hide' : 'Show'}</button>
        {this.state.visible && <p>'Hey! Is this what you were anxious to see?'</p>}
      </div>
    )
  }
}