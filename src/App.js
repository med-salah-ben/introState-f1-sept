import React, { Component } from 'react'
import Counter from './components/Counter'

 class App extends Component {
  state = {
    isShow : true
  }
  render() {
    return (
      <div>
        {this.state.isShow ? <Counter /> : "click btn to show counter"}
        <button onClick={()=>this.setState({isShow: !this.state.isShow})}>Click Me</button>
      </div>
    )
  }
}

export default App