import React, {Component, useEffect, useState} from 'react';
import './group.css';
import {getGroup, getUserList} from "../../util/APIUtils";
import usePromise from 'react-promise';


const getasync = (prom)=> {
    const {value, loading} = usePromise<Array>(prom)
    if (loading) return null
    return value
}

class UserGroup extends Component {

    constructor(props) {
        super(props);
        document.title = "UserGroup";
        console.log(props);
        this.state = {};
    }



    displayAllGroupMembers () {
        const groupIdTest = '63895cfc704a8b2799cba78e';
        const groupEmails = getUserList(groupIdTest);
        return groupEmails;
    }

    //this.displayAllGroupMembers()


    render () {
        console.log(getasync(this.displayAllGroupMembers()));
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

                </tbody>
            </table>
        </div>)
    }


}

export default UserGroup;