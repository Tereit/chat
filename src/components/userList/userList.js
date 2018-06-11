import React from 'react';
import PropTypes from 'prop-types';
import { User } from '.';

import './userList.css';

const UserList = (props) => {
    
    return(
        <div className="userList">
            {
                props.users.map((user, index) => 
                    <User key={index} user={user} />
                )
            }
        </div>)
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
};

export default UserList;