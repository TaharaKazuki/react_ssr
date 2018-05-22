/* presentational component */
import React from 'react';
import style from './style.scss';
import cssConnector from 'shared/helpers/cssConnector';

const css = cssConnector(style);

export default (props) => {
  const {
    user:{
      userList
    }
  } = props;

  return (
    <ul className={css('sample')}>
      {Array.isArray(userList)
        ? userList.map(user =>
          <li key={user.id}>{user.name}</li>
        )
        : null
      }
    </ul>
  )
};