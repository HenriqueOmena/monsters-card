import React, { Component } from 'react';
import './App.css';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

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
            <SearchBox
              placeholder="Search monsters"
              handleChange={ e => {
                  this.setState({ searchField: e.target.value }, () => console.log(this.state))
              }}
              />
            <CardList monsters={ filteredMonster } />

            </div>
        );
    }
}

export default App;
