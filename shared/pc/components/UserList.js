import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from 'shared/pc/reducers/fetchUsersActionCreator';

export default connect(
  state => ({
    user: state.user
  }),
  { fetchUser }
)(class UserListContainer extends Component{
  componentDidMount(){
    this.props.fetchUser();
    // console.log(this.props.user);
  }
  render(){
    return (
      <div>test</div>
    );
  }
});