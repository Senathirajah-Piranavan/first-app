 import { Component } from "react"


class Welcome extends Component{
    render(){
        const {name} = this.props
        return(
            <h1>It's me. {name}</h1>
        )
    }
}


// function Welcome(props){
//     return <h1>It's you {props.name}....?</h1>
// }

// const Welcome = props => {
//     const {name,degree} = props // with/without this line, the output are same... 
//     return( 
//     <div>
//         <h1>He is {name}, follows {degree}</h1>
//         {/* {props.childern} */}
//     </div>)
// }


// const Welcome = () => {
//     return  <h1>Hi..</h1>
// }

// import react from "react"

// const Welcome = () => {
//     // return  <h1>Hi..</h1>

//     return React.createElement('div', null, React.createElement('h1', null, 'pirana'))
// }


  export default Welcome