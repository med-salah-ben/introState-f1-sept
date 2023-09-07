import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        console.log("Constructor()");
        super()
        this.state={
            count : 0,
            timer:0,
            interval : null
        }
    }

    componentDidMount(){
        console.log("componentDidMount()")
        this.setState({interval:setInterval(()=>{
            this.setState({timer:this.state.timer +1})
        },1000)})
    }

    componentDidUpdate(){
        console.log('Component Did Update');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount()')
    }

    increment = ()=> this.setState({count:this.state.count + 1})
    reset = ()=> this.setState({count:0})
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({count:this.state.count - 1})}>-</button>
        <span> {this.state.count} </span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>Reset</button>
        <span>{this.state.timer}</span>
      </div>
    )
  }
}

export default Counter