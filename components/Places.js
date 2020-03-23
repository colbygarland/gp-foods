import ListItem from "./ListItem";
import List from "./List";
import React, { Component } from 'react';
import Tabletop from 'tabletop';

class Places extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Tabletop.init({
            key: '1ucJcnxjNwC_heQ_ogj6XIVtb-Ele6BM2kjOFSaK5h4s',
            callback: googleData => {
                for(let i = 0; i < googleData.length; i++){
                    this.setState(prevState => ({
                        data: [...prevState.data, googleData[i]]
                    }));
                    console.log(this.state.data);
                }
            },
            simpleSheet: true
        })
    }

    places() {
        let places = [];
        for(let i = 0; i < this.state.data.length; i++){
            places.push(
                <ListItem
                    status={this.state.data[i].status}
                    name={this.state.data[i].name}
                    phone={this.state.data[i].phone}
                />
            )
        }
        return (
            places
        );
    }

    render() {
        return (
            <List>
                {this.places()}
            </List>
        )
    }
}

export default Places
