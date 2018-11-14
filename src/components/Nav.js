import React, { Component } from 'react'
import { Link } from 'react-router-dom'  

export default class Nav extends Component {
  render() {
    return (
        <div>
            <Link to="/">Landing View</Link>&nbsp;&nbsp;
            <Link to="/Postform">Post Form</Link>&nbsp;&nbsp;
            <Link to="/Posts">Posts</Link>
        </div>
    )
  }
}
