import axios from 'axios'
import swal from "sweetalert";

//-----------list-----------------
export const setContacts=(contacts)=>{
    //console.log('contacts', contacts)
    return {
        type:'LIST_CONTACTS',
        payload:contacts
    }
}
export const startSetContacts=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3001/contacts',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            //console.log(response.data)
            if(!response.data.hasOwnProperty('errors')){
                const contacts=response.data
               dispatch(setContacts(contacts))
            }
            else{
                alert(response.data.message)
            }
          
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//--------------add--------------
export const addContact=(contact)=>{
    return {
        type:'ADD_CONTACT',
        payload:contact
    }
}

export const startAddContact=(formData, props)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3001/createcontact', formData, {
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            //console.log(response.data)
            const contact=response.data
            dispatch(addContact(contact))
            swal("Thank you!", "New Contact is added", "success")
            props.history.push(`/listcontacts`)
           // window.location.reload()
          //  this.props.history.push(`/showcontact/${this.props.match.params.id}`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//------------edit--------------
export const editContact=(contact)=>{
    return {
        type:'EDIT_CONTACT',
        payload:contact
    }
}


export const startEditContact=(formData, props)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3001/contacts/${props.match.params.id}`, formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           // console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }
            else{
               // alert('data successfully edited')
                dispatch(editContact(response.data))
                swal("Thank you!", "Contact information is edited", "success")
                props.history.push(`/showcontact/${props.match.params.id}`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


//--------------remove------------
export const removeContact=(id)=>{
  //  console.log('here', id)
    return {
        type:'REMOVE_CONTACT',
        payload:id
    }
}

export const startRemoveContact=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3001/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
           // console.log(response.data)
            //const contacts=response.data

          dispatch(removeContact(id))
          swal("Thank you!", "Contact is Removed!", "success")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}