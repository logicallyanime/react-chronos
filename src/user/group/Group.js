import React, { Component } from 'react';
import './group.css';
import {getCurrentUser, getGroups} from "../../util/APIUtils";
import {Button} from "antd";


class Group extends Component {
    constructor(props) {
        super(props);
        document.title = "Groups";
        console.log(props);
    }


    getUserGroups () {
        const groups = getGroups(this.props.currentUser.id);
        console.log(groups);
        return groups;
    }

    buttonGroup(group){
        return(
            <Button
                onClick={() => {
                    alert('clicked');
                }}
            >
                {group.name}
            </Button>
        )
    }

    render() {
        const groups = this.getUserGroups();

        return (
            <p> text</p>
            // <div>
            //     {groups.map((group, index) => {
            //         this.buttonGroup(group);
            //     })}
            // </div>
        )
    }
}

export default Group;