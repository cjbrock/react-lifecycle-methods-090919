import React, { Component } from 'react'
import './App.css'
import Name from "./Name"

class App extends Component {

  constructor(){
    super()
    this.state ={
      name: "Sam"
    }
  }
    render() {
        return (
            <div className="App">
              <Name name={this.state.name} />
            </div>
        )
    }
}

export default App
