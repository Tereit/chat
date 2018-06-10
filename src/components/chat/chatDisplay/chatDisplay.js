import React from 'react';
import PropTypes from 'prop-types';

import ChatMessage from '../chatMessage';

import './chatDisplay.css';

const ChatDisplay = (props) => (
    <div className="chatDisplay">
        <ul>
            {
                props.chatHistory.map((msg, index) =>
                    <ChatMessage key={index} msg={msg} />
                )
            }
        </ul>
    </div>
)

ChatDisplay.propTypes = {
    chatHistory: PropTypes.array.isRequired
};

export default ChatDisplay;