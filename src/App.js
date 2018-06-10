import React, { Component } from 'react';
import './App.css';
import { Chat } from './components/chat';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatHistory: [{user: "Morten", text:"testing"}]
		}
		this.updateChatHistory = this.updateChatHistory.bind(this);
	}
	updateChatHistory(value) {
		this.setState({
			chatHistory: [...this.state.chatHistory, value]
		});
	}
	render() {
		return (
			<div className="App">
				A simple chat app...
				<Chat updateChatHistory={this.updateChatHistory} chatHistory={this.state.chatHistory} />
			</div>
		);
	}
}

export default App;
