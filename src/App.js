import React, { Component } from 'react';
import './App.css';
import { Chat } from './components/chat';
import { UserList } from './components/userList';
import firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';


const config = {
	apiKey: "AIzaSyDk6FlhWdqmkaLU1vMJw9vWaLQ4Ihry2cE",
    authDomain: "chat-77413.firebaseapp.com",
    databaseURL: "https://chat-77413.firebaseio.com",
    projectId: "chat-77413",
    storageBucket: "chat-77413.appspot.com",
    messagingSenderId: "637973744531"
}
firebase.initializeApp(config);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chatHistory: [{user: "Morten", text:"testing"}],
			users: [{userName: "Morten"}],
			isSignedIn: false,
		}
		this.updateChatHistory = this.updateChatHistory.bind(this);

		this.uiConfig = {
			signInFlow: 'popup',
			signInOptions: [
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			],
			callbacks: {
				signInSuccessWithAuthResult: () => false
			}
		};
	}
	componentDidMount() {
		this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
			(user) => this.setState({isSignedIn: !!user})
		);
	}
	componentWillUnmount() {
		this.unregisterAuthObserver();
	}

	updateChatHistory(value) {
		this.setState({
			chatHistory: [...this.state.chatHistory, value]
		});
	}
	render() {
		if(!this.state.isSignedIn) {
			return(
				<div>
					<p>Please sign-in:</p>
					<StyledFirebaseAuth 
						uiConfig={this.uiConfig} 
						firebaseAuth={firebase.auth()}
					/>
				</div>
			)
		}
		return (
			<div className="App">
				<h1 className="title">A simple chat app...</h1>
				<Chat updateChatHistory={this.updateChatHistory} chatHistory={this.state.chatHistory} />
				<UserList users={this.state.users} />
				<button className="signOut" onClick={() => firebase.auth().signOut()}>Sign Out</button>
			</div>
		);
	}
}

export default App;
