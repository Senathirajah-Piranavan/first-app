import { Component } from "react";


class State extends Component{
    constructor() {
      super()
    
      this.state = {
         message : 'Welcome to UK'
      }
    }

    changeMessage(){
        this.setState({
            message : 'Thanks For Coming!'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }

}

export default State