import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import configStore from './store/configStore'
import {startGetUser} from './actions/user'
import { startSetContacts } from './actions/contact';

const store=configStore()
// store.subscribe=()=>{
//     console.log(store.getState())
// }
store.subscribe(()=>{
    console.log(store.getState())
})
 console.log('helloo')
console.log(store.getState())

// store.dispatch(startGetUser())
// store.dispatch(startSetContacts())
if(localStorage.getItem('authToken'))
{
    store.dispatch(startGetUser())
    store.dispatch(startSetContacts())
}

const ele=(
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
