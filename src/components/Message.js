import react, { Component } from 'react'

  class Message extends Component {

     constructor (){
           super()
           this.state = {
            message : 'Welcome visiter'
            

     }
           
  }

   changeMessage () {
    this.setState({
        message : 'Thank you'
    })
   }

  render() {
    return(
         <div>
            <h1>{this.state.message}</h1>
            <button  onClick={() =>this.changeMessage()}>subscribe</button>
         </div>
    )
    }

}

export default Message