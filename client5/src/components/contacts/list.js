import React from 'react'
import { Table, Button, Jumbotron, Spinner } from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../../index.css'
import {startSetContacts,startRemoveContact} from '../../actions/contact'

class ListContacts extends React.Component{
    constructor(){
        super()

        this.state={
            contacts:[],
            flagData:false
        }
    }
    delete=(id)=>{
        this.props.dispatch(startRemoveContact(id))
    }
    render(){
        console.log(this.props.contacts.length)
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
             
                   {/* {(!this.props.contacts.length)?<Spinner/>

                   :  */}
                   {/* <Jumbotron> */}
                       <div className="box">
                <h2>List of {this.props.contacts.length} contacts</h2>

                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            {/* <th>email</th>
                            <th>contact</th> */}
                            <th colSpan='3'>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                      
                            {
                                this.props.contacts.map((contact)=>{
                                    return (
                                        <tr key={contact._id} scope="row">
                                        <td>{contact.name}</td>
                                        {/* <td>{contact.email}</td>
                                        <td>{contact.contactNumber}</td> */}
                                        <td><Link className="btn btn-secondary" to={`/showcontact/${contact._id}/`}>Show</Link></td>
                                        <td><Link className="btn btn-warning" to={`editcontact/${contact._id}`}>Edit</Link></td>
                                        <td><button className="btn btn-danger" onClick={()=>{this.delete(contact._id)}}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        
                    </tbody>
                </Table>
                <br/>
                <br/>

                <Link className="btn btn-primary" to='/newcontact'>Add a contact</Link>
                {/* </Jumbotron> */}
                </div>
              {/* } */}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
  //  console.log('in list component, store',state.contacts)
    return {
        contacts:state.contacts
    }
}
export default connect(mapStateToProps)(ListContacts)