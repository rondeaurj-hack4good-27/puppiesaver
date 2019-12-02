import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import Nav from './Nav';
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
      email:''
    };
 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
 
  onSubmit(e) {
    e.preventDefault();
 
    const post = {
      title: this.state.title,
      body: this.state.body
    };
 
    this.props.createPost(post);
  }
 
  render() {
    return (
      <div>
        <Nav />
        <h1>Add Information About You and Your Pet</h1>
        <form onSubmit={this.onSubmit}>
          
          <div class="row">
            <div class="column left">
                <label>Date Lost: </label>
            </div>
            <div class="column right">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.dateLost}
              />
            </div>
          </div>
          
          <div class="row">
            <div class="column left">
                <label>Your Name: </label>
            </div>
            <div class="column right">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
          </div>
          
          <div class="row">
            <div class="column left">
                <label>Pet Name: </label>
            </div>
            <div class="column right">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.petName}
              />
            </div>
          </div>

          <div class="row">
            <div class="column left">
                <label>Address: </label>
            </div>
            <div class="column right">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.address}
              />
            </div>
          </div>

          <div class="row">
            <div class="column left">
                <label>City: </label>
            </div>
            <div class="column right">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
          </div>

          <div class="row">
            <div class="column left">
                <label>State: </label>
            </div>
            <div class="column right">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.state}
              />
            </div>
          </div>

          <div class="row">
            <div class="column left">
                <label>Zip: </label>
            </div>
            <div class="column right">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.zip}
              />
            </div>
          </div>

          <div class="row">
            <div class="column left">
                <label>Telephone: </label>
            </div>
            <div class="column right">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.telephone}
              />
            </div>
          </div>

          <div class="row">
            <div class="column left">
                <label>Email: </label>
            </div>
            <div class="column right">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
          </div>

          <div class="row">
            <div class="column left">
                <label>Photos: </label>
            </div>
            <div class="column right">
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
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