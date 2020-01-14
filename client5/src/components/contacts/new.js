import React from 'react'
import {connect} from 'react-redux'
import FormContact from './form.js'
import {startAddContact} from '../../actions/contact'


class NewContact extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    submit=(formData)=>{
        this.props.dispatch(startAddContact(formData, this.props))
        
    }
    render(){
        return(
            <div>
                <FormContact submit={this.submit}/>
            </div>
        )
    }
}
export default connect()(NewContact)