import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'


function App() {
  return (
    <div className="App">

      <Greet />

      <Hello name ="vetri"/>
      <Hello name ="maran"/>

      <Greet name ="vetri">
        <p> How are you? </p>
      </Greet>

      <Greet name = "maran">
        <button>Action</button>
      </Greet>

      <Greet name = "jagatheesh" /> 

      {/* <Message />

         {/* <Counter /> */}

    </div>
  );
}

export default App;
