import React from 'react';
import PropTypes from 'prop-types';

const ChatSendButton = (props) => {
    return(
        <button onClick={props.onClick} >Send</button>
    )
}

ChatSendButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ChatSendButton;