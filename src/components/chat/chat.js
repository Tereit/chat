import React from 'react';
import PropTypes from 'prop-types';
import { ChatSendButton, ChatDisplay } from './index';

import './chat.css';

const Chat = (props) => {
    let inputVal;

    const handleSend = () => {
        const newMsg = {sentBy: props.user, message: inputVal.value, time: Date.now()};
        props.updateChatHistory(newMsg);
        inputVal.value = "";
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13 || e.charCode === 13) {
            e.preventDefault();
            e.stopPropagation();
            handleSend();
        }
    }

    return (
        <div className="grid-container">
            <div className="grid-text">
                <ChatDisplay chatHistory={props.chatHistory}/>
            </div>
            <div className="grid-input">
                <input 
                    type="text" 
                    placeholder="Write your message here..."
                    onKeyDown={handleKeyPress} 
                    ref={(input) => inputVal = input} 
                />
            </div>
            <div className="grid-button">
                <ChatSendButton onClick={handleSend} />
            </div>
        </div>
    )
}

Chat.propTypes = {
    chatHistory: PropTypes.array.isRequired,
    user: PropTypes.string.isRequired
};

export default Chat;