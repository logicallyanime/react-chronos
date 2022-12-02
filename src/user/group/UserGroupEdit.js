//Edits the Group's name, add members, remove members and can determine meeting time and determine meeting time

import React, {Component} from "react";
import {getGroup, getGroupName, getUserList} from "../../util/APIUtils";
import {Box, Button, ButtonGroup, FormControl, Table, TextField} from "@mui/material";

let newName = '';
let oldName = '';
let qName = '';
let numUsers = 0;
let ul;

function handleNameChange(event){
    newName = event.target.value;
}

function handleQUserChange(event){
    qName = event.target.value;
}

function handleAdd(event){

}

function handleRemove(event){

}

function handleSave(event){

}

async function thisGroupName() {
    let s;
    await getGroupName("638978c55c05151ad325b89b").then(r =>{
        s = r;
    });
    return s;
}

async function thisGroupUserList(){
    let s;
    await getUserList("638956f0ece6225fdf09948b").then(r =>{
        s = r;
    })
    return s;
}

class UserGroupEdit extends Component{

    async setOldName(){
        oldName = await thisGroupName();
    }

    async setUL() {
        ul = await thisGroupUserList();
    }

    constructor(props) {
        super(props);
        document.title = "Edit Group Details";
        console.log(props);
        this.setOldName();
        this.setUL();
        console.log(ul);
    }

    render() {

        return (
            <div className="center">
                <Box component="form">
                    <FormControl>
                        <TextField id="name-box" label="Name" variant="outlined" defaultValue={oldName}
                                   onChange={handleNameChange}
                        />
                        <TextField id="user-box" label="Group Member" variant="outlined"
                                   onChange={handleQUserChange}
                        />
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button onClick={handleAdd}>Add</Button>
                            <Button onClick={handleRemove}>Remove</Button>
                            <Button onClick={handleSave}>Save</Button>
                        </ButtonGroup>
                        <h3 className="p-3 text-center">React - Display all Users</h3>
                        <table className="table table-striped table-bordered">\
                            <thead>
                            <tr>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {ul}
                            </tbody>
                        </table>
                    </FormControl>
                </Box>
            </div>
        );
    }
}

export default UserGroupEdit