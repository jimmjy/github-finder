import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			users: [],
			loading: false,
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		this.getUsers();
	}

	async getUsers() {
		const response = await axios.get('https://api.github.com/users');
		this.setState({
			loading: false,
			users: [...response.data],
		});
	}

	render() {
		const { users, loading } = this.state;

		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

export default App;
