import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import Nav from './Nav';
import Buttons from './Buttons'
import './style.css';

class PostForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      petName: '',
      dateLost: '',
      address: '',
      zip:'',
      state:'',
      telephone:'',
      email:'',
      uploading: false,
      file: '',
    };
 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 


  onChange(e) {
    console.log(e.target.name);

    if(e.target.name !== 'file'){
      this.setState({ [e.target.name]: e.target.value });
    }
    else{

      this.setState({
        file: e.target.files[0]
      })
    }
  }
 
  onSubmit(e) {
    e.preventDefault();
 
    const post = {
      tagging:{
        name: this.state.name,
        petName: this.state.petName,
        dateLost: this.state.dateLost,
        address: this.state.address,
        zip: this.state.zip,
        state: this.state.state,
        telephone: this.state.telephone,
        email: this.state.email
      },
      file: this.state.file
    };
 
    console.log('state', this.state.file);

    this.props.createPost(post);
  }
 
  render() {
    return (
      <div>
        <Nav />
        <h1>Add Information About You and Your Pet</h1>
        <form onSubmit={this.onSubmit}>
          
          <div className="row">
            <div className="column left">
                <label>Date Lost: </label>
            </div>
            <div className="column right">
              <input
                type="text"
                name="dateLost"
                onChange={this.onChange}
                value={this.state.dateLost}
              />
            </div>
          </div>
          
          <div className="row">
            <div className="column left">
                <label>Your Name: </label>
            </div>
            <div className="column right">
              <input
                type="text"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
          </div>
          
          <div className="row">
            <div className="column left">
                <label>Pet Name: </label>
            </div>
            <div className="column right">
              <input
                type="text"
                name="petName"
                onChange={this.onChange}
                value={this.state.petName}
              />
            </div>
          </div>

          <div className="row">
            <div className="column left">
                <label>Address: </label>
            </div>
            <div className="column right">
              <input
                type="text"
                name="address"
                onChange={this.onChange}
                value={this.state.address}
              />
            </div>
          </div>

          <div className="row">
            <div className="column left">
                <label>City: </label>
            </div>
            <div className="column right">
              <input
                type="text"
                name="city"
                onChange={this.onChange}
                value={this.state.city}
              />
            </div>
          </div>

          <div className="row">
            <div className="column left">
                <label>State: </label>
            </div>
            <div className="column right">
              <input
                type="text"
                name="state"
                onChange={this.onChange}
                value={this.state.state}
              />
            </div>
          </div>

          <div className="row">
            <div className="column left">
                <label>Zip: </label>
            </div>
            <div className="column right">
              <input
                type="text"
                name="zip"
                onChange={this.onChange}
                value={this.state.zip}
              />
            </div>
          </div>

          <div className="row">
            <div className="column left">
                <label>Telephone: </label>
            </div>
            <div className="column right">
              <input
                type="text"
                name="telephone"
                onChange={this.onChange}
                value={this.state.telephone}
              />
            </div>
          </div>

          <div className="row">
            <div className="column left">
                <label>Email: </label>
            </div>
            <div className="column right">
              <input
                type="text"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
          </div>

          <div className="row">
            <div className="column left">
            <label>Photos: </label>
            </div>
            <div className="column right">
              <input type='file' name='file' onChange={this.onChange} />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
 
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};
 
export default connect(null, { createPost })(PostForm);