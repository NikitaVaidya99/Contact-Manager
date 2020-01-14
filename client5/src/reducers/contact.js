const initialContacts=[
//     {_id: "5de90e23a100a0251cc8ebb0",
// name: "pappa",
// email: "pappa@gmail.com",
// contactNumber: "9423061415",
// user: "5de8efe3f59bbf21e40333e8",
// __v: 0}
]

const contactsReducer=(state=initialContacts, action)=>{
    switch(action.type){
        case 'LIST_CONTACTS':{
           // console.log('in reducer list_contacts case', action.payload)
            // return [...action.payload]
            return action.payload
        }
        case 'ADD_CONTACT':{
            return [...state, action.payload]
        }
        case 'REMOVE_CONTACT':{
            console.log('payload', action.payload)
            return state.filter(c=>c._id!=action.payload)
        }
        case 'EDIT_CONTACT':{
            return state.map((c)=>{
               if(c._id==action.payload._id){
                    return {...action.payload}
               }
               else{
                   return {...c}
               }

            })
        }
        

        default:{
            return [...state]
        }
       
    }
}

export default contactsReducer