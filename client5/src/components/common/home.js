import React from 'react'
import {Link} from 'react-router-dom'
import '../../index.css'
import contactImg from '../../../src/contact-manager.png'
function Home(props){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <div className="box">
                <h2><u>Welcome to the contact manager</u></h2>
                <div className="row">
                <div className="offset-md-2 pb4">
                <img src={contactImg} height = "350" width = "400"  className="img-rounded"/>
                </div>
           
                </div>
            </div>
                </div>
            </div>
        )
}

export default Home