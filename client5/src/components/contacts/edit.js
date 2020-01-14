import React from 'react'
import Form from './form.js'
import { connect } from 'react-redux'
import {startEditContact} from '../../actions/contact'
class EditContacts extends React.Component{
    constructor(){
        super()
    }
  
    submit=(formData)=>{
        this.props.dispatch(startEditContact(formData, this.props))
    }

    render(){
        return(
            <div>
                { Object.keys(this.props.contact).length!==0 &&<Form {...this.props.contact} submit={this.submit}/>}
            </div>
        )
    }
}
const mapStateToProps=(state, props)=>{
    return {
        contact:state.contacts.find(c=>c._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditContacts)