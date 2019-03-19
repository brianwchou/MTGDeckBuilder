import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { blueTron } from './utility/URLs'


const initialState = {
    cardStacks: blueTron
}

const reducer = (state=initialState, action) => {
    
    switch(action.type) {
        case 'UPDATE_URL_STORE':
            return { ...state, 
                cardStacks: [
                    ...state.cardStacks.slice(0, action.stackNo),
                    [...(state.cardStacks[action.stackNo] || []), action.url],
                    ...state.cardStacks.slice(action.stackNo + 1)
                ]
            }
        case 'CLEAR_URL_STORE':
            return { ...state,
                cardStacks: []
            }
        default:
            return state
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
