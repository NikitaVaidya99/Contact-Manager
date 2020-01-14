import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import Axios from 'axios'
export default class ContactPic extends React.Component{
    constructor(props){
        super(props)

        this.state={
            pic:props.pic?props.pic:'',
           
        }
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit=(e)=>{
        e.preventDefault()
       
    }

    render(){
        return(
            <div>
                <h2>Upload a picture</h2>
                <form action="/upload"  method="POST"  encType="multipart/form-data">
                    <label>Photo
                        <input type="file" name="photo" value={this.state.photo} onChange={this.change}/>
                    </label><br/><br/>
                    
                    <input type="submit" value="upload"/>


                </form>

                <Link to='/listContacts'>Back</Link>
            </div>
        )
    }
}