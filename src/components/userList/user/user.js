import React from 'react';
import PropTypes from 'prop-types';

import './user.css';

const User = (props) => (
    <p className="user" >{props.user.userName}</p>
)

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User;