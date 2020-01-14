import React from 'react';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {connect} from 'react-redux'
import _ from 'lodash'
import {Nav, NavItem, NavLink, Navbar, NavbarToggler, NavbarBrand, Collapse} from 'reactstrap'

import Login from './components/user/login.js'
import Register from './components/user/register.js'
import Logout from './components/user/logout.js'
import Home from './components/common/home.js'
import ListContacts from './components/contacts/list.js'
import NewContact from './components/contacts/new.js'
import ShowContact from './components/contacts/show.js'
import EditContact from './components/contacts/edit.js'

import Try from './components/contacts/try'


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        {
          (_.isEmpty(props.user))?
          // className="mb-10"
          <Navbar color="info" light expand="md">
      <NavbarBrand className="text-white">Contact Manager</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link className="nav-link text-white" to="/"><b>Home</b></Link>
        </NavItem>
        <NavItem >
            <NavLink className="text-white" href="/register"><b>Register</b></NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="text-white" href="/login"><b>Login</b></NavLink>
            </NavItem>
       
        </Nav>
        </Navbar>
          :
<Navbar color="info" light expand="md">
      <NavbarBrand className="text-white">Contact Manager</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link className="nav-link text-white" to="/"><b>Home</b></Link>
        </NavItem>
        <NavItem>
          <NavLink className="text-white"  href="/listContacts"><b>Contacts List</b></NavLink>
          </NavItem>
       
        <NavItem>
          <NavLink className="text-white"  href="/logout"><b>Logout</b></NavLink>
          </NavItem>
       
        </Nav>
        </Navbar>

          
        }
        
          <br/>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path="/" component={Home} exact={true}/>
          <Route path='/listcontacts' component={ListContacts}/>
          <Route path='/newcontact' component={NewContact}/>
          <Route path='/try' component={Try}/>
          <Route path='/showcontact/:id' component={ShowContact}/>
          <Route path='/editcontact/:id' component={EditContact}/>
          <Route path='/logout' component={Logout}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps=(state)=>{
  return {
    user:state.user
  }
}
export default connect(mapStateToProps)(App);
