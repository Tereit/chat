import React from 'react';
import PropTypes from 'prop-types';

import './chatSendButton.css';

const ChatSendButton = (props) => {
    return(
        <button className="send" onClick={props.onClick} >Send</button>
    )
}

ChatSendButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ChatSendButton;