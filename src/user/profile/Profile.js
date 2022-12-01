import React, { Component } from 'react';
import './Profile.css';
import {NavLink} from "react-router-dom";
import Group from "../group/Group";
import {getCurrentUser} from "../../util/APIUtils";

class Profile extends Component {
    constructor(props) {
        super(props);
        document.title = "My Profile";
        console.log(props);
        this.currentUser = getCurrentUser();
    }
    render() {
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            {
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                            <p><NavLink to="/group">Group</NavLink></p>
                            <p><NavLink to="/editprofile">Edit Profile</NavLink></p>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile