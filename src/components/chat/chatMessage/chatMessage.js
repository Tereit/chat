import React from 'react';
import PropTypes from 'prop-types';

import './chatMessage.css';

const ChatMessage = (props) => (
    <div className="chatMessage">
        {props.msg.user} says: 
        {props.msg.text}
    </div>
)

ChatMessage.propTypes = {
    msg: PropTypes.object.isRequired,
}

export default ChatMessage;