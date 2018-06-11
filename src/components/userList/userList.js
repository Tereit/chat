import React from 'react';
import PropTypes from 'prop-types';
import { User } from '.';

import './userList.css';

const UserList = (props) => {
    
    return(
        <ul className="userList">
            {
                props.users.map((user, index) => 
                    <User key={index} user={user} />
                )
            }
        </ul>)
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
};

export default UserList;