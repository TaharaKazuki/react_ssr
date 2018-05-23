/* container component */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from 'shared/common/reducers/fetchUsersActionCreator';
import UserList from 'shared/pc/components/pages/UserListPage/UserList';

const loadData = (store) => {
  return store.dispatch(fetchUser());
};

export default {
  loadData,
  component: connect(
    state => ({
      user: state.user
    }),
    { fetchUser }
  )(class UserListPageContainer extends Component{
    componentDidMount(){
      this.props.fetchUser();
    }
    render(){
      return (
        <UserList {...this.props}/>
      );
    }
  })
};