import React from 'react';
import PropTypes from 'prop-types';

import './chatMessage.css';

const ChatMessage = (props) => (
    <div className="chatMessage">
        {props.msg.sentBy} says: 
        {props.msg.message}
    </div>
)

ChatMessage.propTypes = {
    msg: PropTypes.object.isRequired,
}

export default ChatMessage;