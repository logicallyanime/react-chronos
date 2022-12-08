import React, {Component, useEffect, useState} from 'react';
import './group.css';
import {addToGroupEvents, getGroup, getUserList} from "../../util/APIUtils";
import {Button} from "@mui/material";
//import usePromise from 'react-promise';


// const getasync = (prom)=> {
//     const {value, loading} = usePromise<Array>(prom)
//     if (loading) return null
//     return value
// }

let ul;
let myID = '639138fdbf547c6e9b498af7';


async function thisGroupUserList(){
    let s;
    await getUserList(myID).then(r =>{
        s = r;
    })
    return s;
}

function handleAddEvents(event){
    addToGroupEvents(myID);
}

class UserGroup extends Component {

    constructor(props) {
        super(props);
        document.title = "UserGroup";
        console.log(props);
        this.state = {};
        this.setUL();
    }



    // displayAllGroupMembers () {
    //     const groupIdTest = '63895cfc704a8b2799cba78e';
    //     const groupEmails = getUserList(groupIdTest);
    //     return groupEmails;
    // }

    async setUL() {
        ul = await thisGroupUserList();
    }



    //this.displayAllGroupMembers()


    render () {
        //console.log(getasync(this.displayAllGroupMembers()));
        //console.log(this.props.state);
        return (<div className="container">

            <h3 className="p-3 text-center">React - Display all Users</h3>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {ul}
                </tbody>
                <Button onClick={handleAddEvents}>Add Events To Group</Button>
            </table>
        </div>)
    }


}

export default UserGroup;