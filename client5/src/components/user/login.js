import React from 'react'
import '../../App.css'
import {Form, Input, Label, FormGroup, Jumbotron, Button} from 'reactstrap'
import {startLoginUser} from '../../actions/user'
import {connect} from 'react-redux'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            password:'',
            email:''
        }
    }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            password:this.state.password,
            email:this.state.email
        }
      
        this.props.dispatch(startLoginUser(formData, this.props))
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div className="box" align="center">
               
                <h2 ><u>Login</u></h2>
                <Form onSubmit={this.submit}>
                    <FormGroup>
                    <Label for="email">Email
                        <Input id="email" type="text" name="email" value={this.state.email} onChange={this.change} placeholder="Enter your email" required/>
                    </Label>
                    </FormGroup>
                   <FormGroup>
                    <Label for="password">Password
                        <Input id="password" type="password" name="password" value={this.state.password} onChange={this.change} placeholder="Enter your password" required/>
                    </Label>
                    </FormGroup>
                    <Button color="danger">Submit</Button>
                </Form>
              
            </div>
        )
    }
}

export default connect()(Login)