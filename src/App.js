import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    email: '',
  }

  handleSubmit(event) {
    event.preventDefault()
    const { name, email } = this.state

    const newValue = {
      contacts: [
        ...this.state.contacts,
        {
          name,
          email,
        }
      ]
    }
    this.setState(newValue)
    localStorage.setItem('contacts', JSON.stringify(newValue) )
  }

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('contacts')))
  }

  render() {
    console.log(this.state.contacts)
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <input
              placeholder='Name'
              type="text"
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
            />
            <input
              placeholder='Email'
              type="email"
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
            <button onClick={event => this.handleSubmit(event)}>Add</button>
          </form>
          <div>
            <h2>Contacts:</h2>
            <ul>
              {this.state.contacts.map((item, index) => 
                <li key={index}>{item.name} ({item.email})</li>
              )}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
