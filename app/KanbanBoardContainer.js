import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import 'whatwg-fetch';

class KanbanBoardContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            cards : []
        }
    }

    componentDidMount() {
        fetch('./public/cards.json')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({cards: responseData});
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error);
        });
    }

    render() {
        return <KanbanBoard cards={this.state.cards} />
    }
}

export default KanbanBoardContainer;

