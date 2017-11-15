import React, { Component } from 'react';
import './App.css';
import Background from './components/Background';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Background />

                <div className="content">
                    <h2>Erick Berry</h2>
                    <h3>Front end web developer/designer</h3>
                </div>
            </div>
        );
    }
}

export default App;
