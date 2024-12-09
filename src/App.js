
import { useRef } from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  let dispatch=useDispatch()
  let storeObj=useSelector((store)=>{
      return store;
  });
  let inputRef=useRef();

  
  return (
    <div className="App">
      <input ref={inputRef} className='input'  ></input>
      <button type='button' onClick={()=>{
          dispatch({type:"addActors",data:inputRef.current.value})
      }}>Add actor</button>
      <button type='button' onClick={()=>{
          dispatch({type:"addCricketers",data:inputRef.current.value})
      }}>Add cricketer</button>
      <button type='button' onClick={()=>{
          dispatch({type:"addPoliticians",data:inputRef.current.value})
      }}>Add politician</button>


        <h1>Actors:{storeObj.actors.join()}</h1>
        <h1>Cricketer:{storeObj.cricketers.join()}</h1>
        <h1>Politicians:{storeObj.politicians.join()}</h1>
    </div>
  );

}

export default App;
