import ListItem from "./ListItem";
import List from "./List";
import React, { Component } from 'react';
import Tabletop from 'tabletop';

class GroceryPlaces extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    item(name, status, days, hours){
        return (
            <li
                className="list-group-item"
            >
                {name}
                <span className={`legend-item__box ${status ? status : 'default'} float-right`}></span>
                <p style={{marginBottom:0}}><small className="text-muted">Seniors shopping: {days} {hours}</small></p>
            </li>
        );
    }

    componentDidMount() {
        Tabletop.init({
            key: '19rbmDoczrsZUdCXxeoOUsMwvZzB0ProQiS3PINyGdQY',
            callback: googleData => {
                for(let i = 0; i < googleData.length; i++){
                    this.setState(prevState => ({
                        data: [...prevState.data,
                            this.item(googleData[i].name, googleData[i].status, googleData[i].days, googleData[i].hours)
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

export default GroceryPlaces
