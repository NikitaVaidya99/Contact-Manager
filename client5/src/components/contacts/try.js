import React from 'react'

import {Form, Input, Label, FormGroup, Jumbotron, Button} from 'reactstrap'

class Try extends React.Component{
    constructor(){
        super()
        this.state={
           
        }
    }
    submit=(e)=>{
        e.preventDefault()
        const formData={
            password:this.state.password,
            email:this.state.email
        }
      
      //  this.props.dispatch(startLoginUser(formData, this.props))
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <Jumbotron>
                <h2><u>Login</u></h2>
                <form action="/try" method="post" enctype="multipart/form-data">
                <input type="file" name="myFile" />
                </form>
                </Jumbotron>
                </div>
            </div>
        )
    }
}

export default Try