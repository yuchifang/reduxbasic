import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore ,applyMiddleware}from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers/counter';


const store=createStore(reducer);
//reducer 函數

//store.subscribe(()=>console.log("State update!",store.getState()));
//subscribe 監聽store 會不會變化 變化執行  //store.getState()把值輸出

// //改變store
// store.dispatch({
//   type:"INCREMENT"
// });

const render=()=>{
  ReactDOM.render(<App 
          onIncrement={()=>{store.dispatch({type:"INCREMENT"});}} 
          value={store.getState()} 
          onDecrement={()=>{store.dispatch({type:"DECREMENT"});}}
          />, document.getElementById('root'));
};
render();

store.subscribe(render);//監聽

registerServiceWorker();
