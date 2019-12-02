import React, { Component } from 'react'
import { Link } from 'react-router-dom'  
import Nav from './Nav';


export default class LandingView extends Component {
  render() {
    return (
      <div>
        <Nav /> 
         LandingView - Test
        <br></br>
        <Link to="/posts">
            Posts
        </Link>
        <br></br>
        <Link to="/postform">
            Postform
        </Link>
      </div>
    )
  }
}
