import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        // apenas para relembrar ele busca o construtor de Component que foi extendido em App
        super();

        this.state = {
            monsters: [
                {
                    name: 'Frankenstein',
                    id: 'm1'
                },
                {
                    name: 'Dracul',
                    id: 'm2'
                },
                {
                    name: 'Zombie',
                    id: 'm3'
                },
            ]
        }

    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map( monster => {
                        return <h1 key={monster.id} > { monster.name } </h1>
                    })
                }
            </div>
        );
    }
}

export default App;
