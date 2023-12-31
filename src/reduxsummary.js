import { createStore } from "redux"

const initialStore = {
    count:0
  }
  
  function reducer(state,action){
    console.log({state,action})
    if(action.type === 'DECREASE'){
      return {
      ...state , count: state.count - 1 
      }
    }
    if(action.type === 'INCREASE'){
      return {
      ...state , count: state.count + 1 
      }
    }
    return state
  }
  
  
  
  const store = createStore(reducer, initialStore);
  store.dispatch({type:'DECREASE'});
  store.dispatch({type:'INCREASE'})
  
  console.log(store.getState());