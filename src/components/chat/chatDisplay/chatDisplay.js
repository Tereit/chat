import React from 'react';
import PropTypes from 'prop-types';

import ChatMessage from '../chatMessage';

import './chatDisplay.css';

class ChatDisplay extends React.Component {

    componentDidUpdate() {
        this._div.scrollTop = this._div.scrollHeight;
    }
    render() {
        return(
            <div 
                className="chatDisplay"
                ref={(ref) => this._div = ref}
            >   
                {
                    this.props.chatHistory.map((msg, index) =>
                        <ChatMessage key={index} msg={msg} />
                    )
                }
            </div>
        )
    } 
}

ChatDisplay.propTypes = {
    chatHistory: PropTypes.array.isRequired
};

export default ChatDisplay;