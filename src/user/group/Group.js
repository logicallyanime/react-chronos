import React, { Component } from 'react';
import './group.css';

class Group extends Component {
    constructor(props) {
        super(props);
        document.title = "Groups";
        console.log(props);
    }
    render() {
        return (
            <p>test</p>
        );
    }
}

export default Group;