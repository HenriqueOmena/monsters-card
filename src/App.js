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

    // apenas para lembrar caso aqui seja função  normal o this tera reação diferente
    handleChange = e => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonster = monsters.filter( monster =>
                monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
            )
        return (
            <div className="App">
            <h1> Monsters List </h1>
            <SearchBox
              placeholder="Search monsters"
              handleChange={ this.handleChange }
              />
            <CardList monsters={ filteredMonster } />

            </div>
        );
    }
}

export default App;
