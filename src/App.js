
import axios from 'axios';
import React, {Component} from 'react';
import './App.css'
import Form from './components/Form';

import Navbar from './components/Navbar';
import Users from './components/Users';



  class App extends Component {

    state={
      users:[],
      loading:''
    };
  
    handleGetRequest = (e) =>{
      
      e.preventDefault();
        const searchTerm=e.target.elements.find.value;
        this.setState({loading:"loading...."});

        if(searchTerm){
          
            axios.get(`https://api.github.com/search/users?q=${searchTerm}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

            .then((res)=>{
              this.setState({users: res.data.items})
            })
            .catch((err)=>{
              console.log(err);
            });

      }else{
        alert("Please Enter a name");
      }
  
    }

     clearSearch=(e)=>{
      
      this.setState({users:[]});
   }
  
    render() {
      return (
        <div className="app">
          <nav className="navbar bg-primary">
            <Navbar />
          </nav>
            <Form 
              handleGetRequest={this.handleGetRequest} 
              clear={this.clearSearch}
              clearBtnControl={this.state.users.length > 0 ? true :false}
            /> 
            <Users users={this.state.users} />   
        </div>
      )
    }
  }

 
  

export default App
