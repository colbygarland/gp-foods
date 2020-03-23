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
                        data: [...prevState.data,
                            <ListItem
                                status={googleData[i].status}
                                name={googleData[i].name}
                                phone={googleData[i].phone}
                            />
                        ]
                    }));
                }
            },
            simpleSheet: true
        })
    }

    render() {
        return (
            <List>
                {this.state.data}
            </List>
        )
    }
}

export default Places
