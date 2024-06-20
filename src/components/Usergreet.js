import React, { Component } from 'react'

export class Usergreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          isLoggedIn: true,
      }
    }
  render() {
    if (this.state.isLoggedIn) {
        return(<div>Welcome Piranavan</div>)
    } else{
        return(<div>Welcome Guest</div>)
    }
    return (
        <div>
            <div>Welcome Piranavan </div>
            <div>Welcome Guest</div>
        </div>
      
    )
  }
}

export default Usergreet