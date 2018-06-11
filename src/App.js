import React, { Component } from 'react';
import './App.css';
import { Chat } from './components/chat';
import { UserList } from './components/userList';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatHistory: [{user: "Morten", text:"testing"}],
			users: [{userName: "Morten"}]
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
				<h1 className="title">A simple chat app...</h1>
				<Chat updateChatHistory={this.updateChatHistory} chatHistory={this.state.chatHistory} />
				<UserList users={this.state.users} />
			</div>
		);
	}
}

export default App;
