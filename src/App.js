import React, { Component } from 'react';
import './App.css';

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
    constructor() {
        // apenas para relembrar ele busca o construtor de Component que foi extendido em App
        super();

        this.state = {
            monsters: [],
            searchField:''
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then( response => response.json())
          .then( users => this.setState({ monsters: users }))
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonster = monsters.filter( monster =>
                monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
            )
        return (
            <div className="App">
            <input
              type="search"
              placeholder="Search monsters"
              onChange={ e => {
                  this.setState({ searchField: e.target.value }, () => console.log(this.state))
              }}
              />
            <CardList monsters={ filteredMonster }>

            </CardList>

            </div>
        );
    }
}

export default App;
