import React from 'react'
import '../../index.css'
import {connect} from 'react-redux'
import {startSetUser} from '../../actions/user'
import { Jumbotron,Form, Label, Input, Button, FormGroup } from 'reactstrap'
class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            email:''
        }
    }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        this.props.dispatch(startSetUser(formData, this.props))
       
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div className="box" align="center">
                <h2><u>Register</u></h2>
                <Form onSubmit={this.submit}>
                    <FormGroup>
                    <Label for="name">Username
                        <Input id="name" type="text" name="username" value={this.state.username} onChange={this.change}  placeholder="Enter your name" required/>
                    </Label>
                    </FormGroup>
                    <FormGroup>
                    <Label for="email">Email
                        <Input id="email" type="text" name="email" value={this.state.email} onChange={this.change}  placeholder="Enter your email" required/>
                    </Label>
                    </FormGroup>
                    <FormGroup>
                    <Label for="password">Password
                        <Input id="password" type="password" name="password" value={this.state.password} onChange={this.change}  placeholder="Enter your password" required/>
                    </Label>
                    </FormGroup>
                    <Button color="danger">Submit</Button>
                </Form>
            </div>
        )
    }
}
export default connect()(Register)