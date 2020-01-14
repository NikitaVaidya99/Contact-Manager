const initialState={}

const usersReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'SET_USER':{
         //   console.log('in reducer set_user case',action.payload)
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default usersReducer