/* presentational component */
import React from 'react';

export default (props) => {
  const {
    user:{
      userList
    }
  } = props;

  return (
    <ul>
      {Array.isArray(userList)
        ? userList.map(user =>
          <li key={user.id}>{user.name}</li>
        )
        : null
      }
    </ul>
  )
};