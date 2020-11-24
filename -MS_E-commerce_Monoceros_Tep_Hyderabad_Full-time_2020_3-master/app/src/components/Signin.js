import React from 'react'

class Signin extends React.Component{
    render(){
    return(
        <div className="signbox">
            <h1>Signin</h1>
            <input type="text" placeholder="username" onChange={this.props.handlechangeUsername}/><br/><br/>
            <input type="password" placeholder="password" onChange={this.props.handlechangePassword}/><br/><br/>
            <button onClick={this.props.handleEnter}>Enter</button>
        </div>
    )
}
}
export default Signin;