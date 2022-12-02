import React, {Component} from "react";
import {
    determineMeetingTime,
    getCurrentUser,
    getGroup,
    getGroupName,
    getUser,
    getUserByEmail,
    getUserList,
    userExists
} from "../../util/APIUtils";
import {Box, Button, ButtonGroup, FormControl, Table, TextField} from "@mui/material";

let newName = '';
let oldName = '';
let qName = '';
let tempQEmail;
let ul;
let temp;
let year = 0;
let month = 0;
let day = 0;
let length = 0;
let date = 0;
let myprops;
let tempPMs;
let PMs;

function handleNameChange(event){
    newName = event.target.value;
}

function handleQUserChange(event){
    qName = event.target.value;
}

async function thisQEmail(){
    let s;
    await userExists(qName).then(r => {
        s = r;
    })
    return s;
}

async function setTempQEmail(){
    tempQEmail = await thisQEmail();
}

async function thisNewUser(){
    let s;
    await getUserByEmail(qName).then(r => {
        s = r;
    })
    return s;
}



function handleAdd(event){
    UserGroupEdit.setNewUser();
    console.log(temp);
}

function handleRemove(event){

}



async function thisGroupName() {
    let s;
    await getGroupName("638978c55c05151ad325b89b").then(r =>{
function handleAdd(event){
    console.log(qName);
    addUserToGroup("638956f0ece6225fdf09948b", qName);
}

function handleRemove(event){
    console.log(qName);
    removeUserFromGroup("638956f0ece6225fdf09948b", qName);
}

function handleSave(event){
    console.log(newName);
    updateGroupName("638956f0ece6225fdf09948b", newName, null, null, null);
}

function handleAddEvents(event){
    addToGroupEvents("638956f0ece6225fdf09948b");
}

async function thisGroupName() {
    let s;
    await getGroupName("638956f0ece6225fdf09948b").then(r =>{
        s = r;
    });
    return s;
}

async function thisGroupUserList(){
    let s;
    await getUserList("638978c55c05151ad325b89b").then(r =>{
        s = r;
    })
    return s;
}

async function setPMs(){
    PMs = await tempPMs;
}

function handleYearChange(event){
    year = event.target.value
}

function handleMonthChange(event){
    month = event.target.value
}

function handleDayChange(event){
    day = event.target.value
}

function handleLengthChange(event) {
    length = event.target.value
}

class UserGroupEdit extends Component{

    static AssembleDate() {
        date = year + "-";
        if(month < 10){
            date += "0" + month + "-";
        }else{
            date += month + "-";
        }
        if(day <10){
            date += "0" + day;
        }else{
            date += day;
        }
        date += "T00:00:00"
        if(myprops.currentUser.timezone <= 0){
            date += "%2B";
        }else{
            date += "-";
        }
        if(Math.abs(Math.abs(myprops.currentUser.timezone) < 10)){
            date += "0";
        }
        date += Math.abs(Math.floor(myprops.currentUser.timezone));
        if(Math.floor(myprops.currentUser.timezone) - myprops.currentUser.timezone == 0){
            date += ":00";
        }else if(Math.floor(myprops.currentUser.timezone) - myprops.currentUser.timezone == 0.5){
            date += ":30";
        }else{
            date += ":15";
        }
        console.log(date);
    }

    handleDTMCall() {
        UserGroupEdit.AssembleDate();
        tempPMs = determineMeetingTime("638978c55c05151ad325b89b", myprops.currentUser.email,length,date);
        setPMs();
        console.log(PMs)
        if(document.getElementById("dtmTable")){
            document.getElementById("dtmTable").remove();
        }
        var t = document.createElement("TABLE");
        t.setAttribute("id", "dtmTable");
        document.body.appendChild(t);
        let i;
        let len = PMs.length
        console.log(len);
        for(i = 0; i < len; i++){
            let r = document.createElement("TR");
            let s = document.createElement("TD");
            let sc = document.createTextNode("" + i);
            s.appendChild(sc);
            r.appendChild(s);

            let u = document.createElement("TD");
            let uc = document.createTextNode("From " + (new Date(PMs[i].key.start.dateTime.value)).toUTCString() + " until " + (new Date(PMs[i].key.end.dateTime.value)).toUTCString() + " " + PMs[i].val);
            u.appendChild(uc);
            r.appendChild(u);
            t.appendChild(r);
        }
        document.body.appendChild(t);

    }

    static async setNewUser(){
        temp = await thisNewUser();
    }

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
        myprops = props;
        console.log(myprops);
        this.setOldName();
        this.setUL();
        console.log(ul);
    }

    render() {
        return (
            <div className="center">
                <Box component="form">
                    <FormControl>
                        <body>
                        <TextField id="name-box" label="Name" variant="outlined" defaultValue={oldName}
                                   onChange={handleNameChange}
                        />
                        <TextField id="user-box" label="Group Member" variant="outlined"
                                   onChange={handleQUserChange}
                        />
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button onClick={handleAdd}>Add</Button>
                            <Button onClick={handleRemove}>Remove</Button>
                        </ButtonGroup>
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
                        </table>
                        <TextField id="year-box" label="Meeting Year"
                                   onChange={handleYearChange}
                        />
                        <TextField id="month-box" label="Meeting Month"
                                   onChange={handleMonthChange}
                        />
                        <TextField id="day-box" label="Meeting Day"
                                   onChange={handleDayChange}
                        />
                        <TextField id="length-box" label="Meeting Length"
                                   onChange={handleLengthChange}
                        />
                        <Button variant="contained"
                                onClick={this.handleDTMCall}
                        >Determine Meeting Time</Button>
                        </body>
                    </FormControl>
                </Box>
            </div>
        );
    }
}

export default UserGroupEdit