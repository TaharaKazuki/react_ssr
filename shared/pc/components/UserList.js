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
  }
  render(){
    const { userList } = this.props.user;
    console.log(userList);
    return (
      <ul>
        {Array.isArray(userList)
          ? userList.map(user => (
            <li key={user.id}>{user.name}</li>))
          :null
        }
      </ul>
    );
  }
});