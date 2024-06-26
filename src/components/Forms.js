import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         comment : '',
         topic : 'react',
         
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    handleCommentChange = event => {
        this.setState({
            comment : event.target.value
        })
    }
    handleTopicChange = event => {
        this.setState({
            comment : event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    

  render() {
    const {username, comment, topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName</label>
            <input type='text' value={username} onChange={this.handleUsernameChange}/>
            
        </div>
        <div>
            <label>comment</label>
            <textarea value={comment} onChange={this.handleCommentChange}/>
        </div>
        <div>
            <label>Topic</label>
            <select value={comment} onChange={this.handleTopicChange}>
                <option value='react'>React</option>
                <option value='nodejs'>NodeJs</option>
                <option value='vue'>Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Forms