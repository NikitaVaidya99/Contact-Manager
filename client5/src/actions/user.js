import axios from 'axios'
import swal from "sweetalert";
import {setContacts} from '../actions/contact'
export const setUser=(user={})=>{
    return {
        type:'SET_USER',
        payload:user
    }
}

export const startSetUser=(formData, props)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3001/register', formData)
        .then((response)=>{
            if(!response.data.hasOwnProperty('errors')){
                //alert('user created successfully')
                dispatch(setUser())
                swal("Thank you!", "You have Registered successfully", "success")
                props.history.push('/login')
            }
            else{
                //alert(response.data.message)
                swal( `${response.data.message}`, "error")
            }
        })
        .catch((err)=>{
            console.log(err)
        })

       
    }
}

export const startLoginUser=(formData, props)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3001/login', formData)
        .then((response)=>{
            if(!response.data.hasOwnProperty('errors')){
              
                localStorage.setItem('authToken', response.data)
                Promise.all([axios.get('http://localhost:3001/account',{
                    headers:{
                        'x-auth':response.data
                    }
                }), axios.get('http://localhost:3001/contacts',{
                    headers:{
                        'x-auth':response.data
                    }
                })
            ])
            .then((values)=>{
                const [userResponse, contactsResponse]=values
                dispatch(setUser(userResponse.data))
                dispatch(setContacts(contactsResponse.data))
                swal("Thank you!", "You have logged in successfully!", "success")
                props.history.push('/listContacts')
            })
            }else{
                console.log(response.data.message)
            }
        })
        .catch((err)=>{
            console.log(err)
        })

       
    }
}

export const startGetUser=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3001/account', {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           console.log('in startGetUser',response.data)
            if(!response.data.hasOwnProperty('errors'))
            {
                const user=response.data
                dispatch(setUser(user))
               // props.history.push('/listcontacts')
            }else{
                console.log(response.data.message)
            }
        })
        .catch((err)=>{
            console.log(err)
        })

       
    }
}
export const startLogoutUser=(props)=>{
    return (dispatch)=>{
        axios.delete('http://localhost:3001/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data){
                //alert(response.data.notice)
                dispatch(setUser())
                localStorage.clear()
                swal("Thank you!", "You have logged out successfully", "success")
                props.history.push('/login')
            }
            else{
                alert('could not logout, try again')
            }
        })
        .catch((err)=>{
            console.log(err)
           
        })
    }
}