import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import {Jumbotron} from 'reactstrap'
import {connect} from 'react-redux'
function ShowContact(props){
        return(
                <div className="box" align="center">
               <br/><br/>
                <h3 className="text-center"><u>{props.contact.name}</u></h3>
                {/* <h4>Name: {props.contact.name}</h4> */}
                <h4>Email: {props.contact.email}</h4>
                <h4>Contact Number: {props.contact.contactNumber}</h4>

                <Link className="btn btn-primary" to='/listcontacts'>Back</Link>
              
                </div>
        )
}
const mapStateToProps=(state,props)=>{
   const id=props.match.params.id
    return {
        contact:state.contacts.find(c=>c._id==id)
    }
}
export default connect(mapStateToProps)(ShowContact)