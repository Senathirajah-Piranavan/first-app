import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import Usergreet from './components/Usergreet';
import Welcome from './components/Welcome';
import State from './components/State';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Eventbind from './components/Eventbind';

function App() {
//    function handleNameChange() {
//             const name = ['earn','get','won'];
//             const int = Math.floor(Math.random()*3);

//             return(
//               name[int]
//             )
//    }
 return (
    <div className="App"> 

        {/* <State /> */}

         {/* <Welcome name = 'piranavan'/>
         <p>How are you?</p>
         <Welcome name = 'kaji' degree ='SE'/>
         <button>Action</button> */}

              {/* <Usergreet />   */}

        {/* <p>You have {handleNameChange ()} Money </p> */}
        
        

      {/* <Greet />

      <Hello name ="vetri"/>
      <Hello name ="maran"/>

      <Greet name ="vetri">
        <p> How are you? </p>
      </Greet>

      <Greet name = "maran">
        <button>Action</button>
      </Greet>

      <Greet name = "jagatheesh" />  */}

      {/* <Message /> */}

      {/* <Counter /> */}
      

      {/* <FunctionClick/>
      <ClassClick/> */}
      
      <Eventbind/>

    </div>
  );
}


export default App;
