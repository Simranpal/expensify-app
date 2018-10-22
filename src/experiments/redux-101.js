import {createStore} from 'redux';

const store = createStore((state = { count : 0 }, action)=>{
    
    if(action.type === 'INCREMENT') {
        return {
            count : state.count + 1
        }
    }
    else {
        return state; 
    }
});

console.log(store.getState());

//Actions
//increment count
store.dispatch({
    type : 'INCREMENT'
});

//another increment
store.dispatch({
    type : 'INCREMENT'
});

console.log(store.getState());