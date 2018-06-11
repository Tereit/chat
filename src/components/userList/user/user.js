import React from 'react';
import PropTypes from 'prop-types';

import './user.css';

const User = (props) => (
    <div className="grid">
        <div className="user" >{props.user.name}</div>
        {props.user.online && <div className="dot" ></div>}
    </div>
)

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User;