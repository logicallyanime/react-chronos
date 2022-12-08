import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import './group.css';
import {getCurrentUser, getGroups, createGroup} from "../../util/APIUtils";
//import {Button} from "antd";
import { Link } from 'react-router-dom';
import {Button} from "@mui/material";
//import PrivateRoute from "../../common/PrivateRoute";

const groups = [
 "Group 1", "group 2", "group 3"
]


class Group extends Component {
    constructor(props) {
        super(props);
        document.title = "Groups";
        console.log(props);
    }


    getUserGroups () {
        const groups = getGroups(this.props.currentUser.id);
        //console.log(groups);
        return groups;
    }

    buttonGroup(group){
        return(
            <Button
                component={Link} to="/new/location"
            >
                {group.name}
            </Button>
        )
    }

    render() {      //use async?
        const groups = this.getUserGroups();    //use await?
        console.log(groups);
        // const groupsList = groups.promise;
        // console.log(groupsList);
        //
        // // Get an array of the keys in your object
        // const array = Object.keys(groups); // [1, 2]
        // console.log(array);
        //
        // // Loop through that array using each key to get the value
        // const result = array.map((key) => {
        //     const value = groups[key];
        //     console.log(key);
        //
        //     // Perform your desired logic here then return a new value
        //     return value.data;
        // });
        // console.log(result); // ["item 1 data", "item 2 data"]

        return (
            <div>
                <div>
                    <Button
                        onClick={() => {
                            alert('Creating New Group(Future)');
                            createGroup(this.props.currentUser.id);

                        }}
                    >
                        GroupCreate
                    </Button>
                </div>
                {/*<div>*/}
                {/*    {*/}
                {/*     groups.forEach(group => {*/}
                {/*         this.buttonGroup(group);*/}
                {/*         console.log(group);*/}
                {/*         alert(group);*/}
                {/*     })*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Group;