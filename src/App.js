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
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

class App extends Component {
	unsubHistory;
	unsubUsers;
	constructor(props) {
		super(props);
		this.state = {
			chatHistory: [],
			users: [],
			isSignedIn: false,
			currentUser: "undefined",
			uid: ""
		}
		this.updateChatHistory = this.updateChatHistory.bind(this);
		this.signOut = this.signOut.bind(this);

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
		this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
			this.setState({
				isSignedIn: !!user,
			});
			if(user) {
				firestore.collection("users").doc(user.uid).set({
					name: user.displayName,
					email: user.email,
					img: user.photoURL,
					online: true
				});
				this.setState({
					currentUser: user.displayName,
					uid: user.uid,
				});
				this.getUserList();
				this.getChatHistory();
			} else {
				this.setState({
					users: [],
					chatHistory: []
				});
				this.unsubHistory();
				this.unsubUsers();
			}
		});
	}
	getUserList() {
		this.unsubUsers = firestore.collection("users").orderBy("name").onSnapshot((data) => {
			data.forEach(doc => {
				this.setState({
					users: [...this.state.users, doc.data()]
				});
			});
		});
	}
	getChatHistory() {
		this.unsubHistory = firestore.collection("chatHistory").orderBy("time")
			.limit(20).onSnapshot(data => {
				this.setState({ chatHistory: [] })
				data.forEach(doc => {
					this.setState({
						chatHistory: [...this.state.chatHistory, doc.data()]
					});
				});
			});
	}
	componentWillUnmount() {
		this.unregisterAuthObserver();	
	}
	async signOut() {
		if(this.state.uid !== "") {
			await firestore.collection("users").doc(this.state.uid).set({
				online: false
			}, {merge: true});
		}
		firebase.auth().signOut();		
	}

	updateChatHistory(value) {
		firebase.firestore().collection("chatHistory").add(value);
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
				<Chat updateChatHistory={this.updateChatHistory} chatHistory={this.state.chatHistory} user={this.state.currentUser} />
				<UserList users={this.state.users} />
				<button className="signOut" onClick={this.signOut}>Sign Out</button>
			</div>
		);
	}
}

export default App;
