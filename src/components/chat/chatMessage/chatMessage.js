import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = (props) => (
    <li className="chatMessage">
        {props.msg.user} says: 
        {props.msg.text}
    </li>
)

ChatMessage.propTypes = {
    msg: PropTypes.object.isRequired,
}

export default ChatMessage;