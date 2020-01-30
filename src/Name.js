import React, { Component } from 'react'

class Name extends Component {

    state ={
        language: "React"
    }

    shouldComponentUpdate(nextProps, nextState){
        if (this.state.language === nextState.language){
            console.log("false")
            return false
        } else {
            console.log("true")
            return true
        }
    }

    changeLang = () => {
        this.setState({
            language: "Ruby on Rails"
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.language}
                <button onClick={this.changeLang}>Change Language!</button>
            </div>
        )
    }
}

export default Name