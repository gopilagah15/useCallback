// import './App.css';
// import Header from './Header';
// import {  useState } from 'react';
// import AddTodo from './AddTodo';
 
// function App() {
//   const [count, setcount] = useState(0);
//   const [todos, settodos] = useState([]);

//   const increment = () =>{
//     setcount((c)=>c+1);
//   };

//   const addtodo=()=>{
//     settodos((t)=>[...t, 'New Todo']);
// };
//   return (
//     <>
//     <div className="container" style={{position:'relative', width:'100%', height:'100vh'}}>
//       <div className="" style={{position:'absolute', top:'50%', left:'50%', transform:
//     'translate(-50%,-50%'}}>
//       <Header/>
//       Count: {count} 
//       <button onClick={increment}>+</button>
//       <hr />
//     <AddTodo todos={todos} addtodo={addtodo}/>


//     </div>
    
//     </div>
//     </>
//   );
// }

// export default App;

// //with the use of callback functions when there is rerendering all the functions get initiated this can slow down the performance to get rid of this we use useCallback hook that choose what function will we run by adding it to its dependencies


import './App.css';
import Header from './Header';
import { useCallback, useState } from 'react';
import AddTodo from './AddTodo';
 
function App() {
  const [count, setcount] = useState(0);
  const [todos, settodos] = useState([]);

  const increment = () =>{
    setcount((c)=>c+1);
  };

  const addtodo = useCallback(()=>{
    settodos((t)=>[...t, 'New Todo']);
},[todos]);
  return (
    <>
    <div className="container" style={{position:'relative', width:'100%', height:'100vh'}}>
      <div className="" style={{position:'absolute', top:'50%', left:'50%', transform:
    'translate(-50%,-50%'}}>
      <Header/>
      Count: {count} 
      <button onClick={increment}>+</button>
      <hr />
     <AddTodo todos={todos} addtodo={addtodo}/> 



    </div>
    
    </div>
    </>
  );
}

export default App;


// //beow we doing same thing without passing the props to another file instead use within a file
// import './App.css';
// import Header from './Header';
// import { useCallback, useState } from 'react';
// import AddTodo from './AddTodo';
 
// function App() {
//   const [count, setcount] = useState(0);
//   const [todos, settodos] = useState([]);

//   const increment = () =>{
//     setcount((c)=>c+1);
//   };

//   const addtodo = useCallback(()=>{
//     settodos((t)=>[...t, 'New Todo']);
// },[todos]);
//   return (
//     <>
//     <div className="container" style={{position:'relative', width:'100%', height:'100vh'}}>
//       <div className="" style={{position:'absolute', top:'50%', left:'50%', transform:
//     'translate(-50%,-50%'}}>
//       <Header/>
//       Count: {count}
//       {/* <button onClick={()=>{setcount(count+1)}}>+</button> */}
//       <button onClick={increment}>+</button>
//       <hr />
//     {/* <AddTodo todos={todos} addtodo={addtodo}/> */}

//     <h2>MyTodos</h2>
//       {todos.map((gopi)=>{
//         return <p >{gopi}</p>
//       })}
//     <button onClick={addtodo}>Add Todo</button>

//     </div>
    
//     </div>
//     </>
//   );
// }

// export default App;
