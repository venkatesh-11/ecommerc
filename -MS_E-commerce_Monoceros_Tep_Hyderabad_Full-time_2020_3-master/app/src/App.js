import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Signin from './components/Signin';
import Products from './components/Products';
import Cart from './components/Cart';
import Singleproduct from './components/Singleproduct'
import Menu from './components/Menu'
import './App.css';

function PrivateRoute({isSigned, Component, ...rest}){
  return(
    <Route 
    {...rest}
    render={(props)=>{
      if(isSigned){
        return <Component {...props} />
      }
      else{
        return <Redirect to="/signin" />
      }
    }}
    />
  )
}
class App extends React.Component {
  state={
    username:"",
    password:"",
    isSigned:false
  }
  handleEnter=()=>{
    const { username }= this.state;
    const { password } = this.state;
    if(username==="shiva" && password==="1253"){
      this.setState({
        isSigned: true
      })
    }
    else {
      console.error("Please enter valid username and password");
    }
  }
  handlechangeUsername=(e)=>{
    this.setState({
      username : e.target.value
    })
  }
  handlechangePassword=(e)=>{
    this.setState({
      password: e.target.value
    })
  }
  
  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation username={this.state.username} isSigned={this.state.isSigned}/>

      <Route
      exact
      path="/" 
      render={(props)=>{
      return <Home {...props} /> 
      }}
     
      />
      <PrivateRoute 
      path="/products" 
      isSigned = {this.state.isSigned}
      Component={Products}
      />
      <PrivateRoute 
      path="/cart" 
      isSigned = {this.state.isSigned}
      Component={Cart}
      />
      <PrivateRoute 
      path="/singleproduct" 
      isSigned = {this.state.isSigned}
      Component={Singleproduct}
      />
      
      <Route path="/signin"
      render={(props)=>{
        if(this.state.isSigned){
          return <Redirect to="/"/>
        }
        else{
          return(
            <Signin 
            {...props}
            isSigned= {this.state.isSigned}
            handleEnter = {this.handleEnter}
            handlechangePassword={this.handlechangePassword}
            handlechangeUsername={this.handlechangeUsername}
            />
          )
        }
      }}/>
      </BrowserRouter>
    </div>
  );
}
}
export default App;
