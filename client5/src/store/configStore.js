import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/user'
import contactsReducer from '../reducers/contact'

// const configStore=()=>{
//     const store=createStore(combineReducers({
//         user:usersReducer,
//         contacts:contactsReducer
//     }), applyMiddleware(thunk))
//    return store
// }

// export default configStore

const configStore=()=>{
    const store=createStore(combineReducers({
        user:usersReducer,
        contacts:contactsReducer
    }), applyMiddleware(thunk))

    return store
}
export default configStore