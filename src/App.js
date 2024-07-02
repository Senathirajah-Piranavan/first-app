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
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import InLine from './components/InLine';
import './appStyles.css';
import styles from './appStyles.modules.css';
import Forms from './components/Forms';
import LifecycleA from './components/LifecycleA';
import { Fragment } from 'react';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParent from './components/FRParent';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

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
         {/* <h1 className='error'>Error</h1>
         <h1 className={styles.success}>success</h1> */}

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

      {/* <Eventbind/> */}

      {/* <ParentComponent/> */}

      {/* <NameList/> */}
      {/* <StyleSheet primary= {true}/> */}
      {/* <InLine/> */}

      {/* <Forms/> */}
       {/* <LifecycleA /> */}
       {/* <FragmentDemo />
       <Table/> */}

       {/* <ParentComp/> */}

       {/* <RefsDemo/> */}
       {/* <FocusInput/> */}
       {/* <FRParent/> */}
       {/* <ErrorBoundary>
       <Hero heroName='Batman'/>
       </ErrorBoundary>

       <ErrorBoundary>
       <Hero heroName='Superman'/>
       </ErrorBoundary>

       <ErrorBoundary>
       <Hero heroName='Joker'/>
       </ErrorBoundary> */}

       <ClickCounter/>

       <HoverCounter/>

    </div>
  );
}


export default App;
