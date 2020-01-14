import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap'
export default class FormContact extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:props.name?props.name:'',
            email:props.email?props.email:"",
            contactNumber:props.contactNumber?props.contactNumber:''
        }
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            contactNumber:this.state.contactNumber
        }

      this.props.submit(formData)
    }

    render(){
        return(
            <div className="box" align="center">
                <h2>Form for Contact</h2>
                <Form onSubmit={this.submit}>
                    <FormGroup>
                    <Label for="name">Name
                        <Input id="name" type="text" name="name" value={this.state.name} onChange={this.change}/>
                    </Label>
                    </FormGroup>
                    <FormGroup>
                    <Label for="email">Email
                        <Input id="email" type="text" name="email" value={this.state.email} onChange={this.change}/>
                    </Label>
                    </FormGroup>
                    <FormGroup>
                    <Label for="contact">Contact Number
                        <Input id="contact" type="text" name="contactNumber" value={this.state.contactNumber} onChange={this.change}/>
                    </Label>
                    </FormGroup>
                    {/* <Label>Photo
                        <Input type="file" name="photo" value={this.state.photo} onChange={this.change}/>
                    </Label><br/><br/>
                     */}
                     {/* <Link to='/upload'>Upload a pic</Link> */}
                    <FormGroup>
                        <Button className="btn btn-danger" type="submit">Submit</Button>
                    </FormGroup>
                    <br/>
                </Form>

                <Link className="btn btn-primary" to='/listContacts'>Back</Link>
            </div>
        )
    }
}