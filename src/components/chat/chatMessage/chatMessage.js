import React from 'react';
import PropTypes from 'prop-types';

import './chatMessage.css';

const ChatMessage = (props) => {
    return(
        <div className="chatMessage">
            <div className="sender">{props.msg.sentBy}:</div>
            <div className="msg">{props.msg.message}</div>
        </div>
    )
}

ChatMessage.propTypes = {
    msg: PropTypes.object.isRequired,
}

export default ChatMessage;