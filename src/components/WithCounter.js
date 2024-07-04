import react from 'react';


const UpdatedComponent = originalComponent =>{
    class NewComponent extends Component{
        render(){
            return <originalComponent name='piranavan'/>
        }
    }
    return NewComponent;
}

export default UpdatedComponent