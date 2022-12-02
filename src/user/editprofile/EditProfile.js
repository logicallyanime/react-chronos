import React, {Component, useState} from 'react';
import {Button, FormControl, MenuItem, Select, Box, TextField} from "@mui/material";
import {getCurrentUser, updateUser} from "../../util/APIUtils";

let newName = '';
let newTZ = 0;

function handleChange(event){
    newName = event.target.value;
}

function handleSelectChange(event){
    newTZ = event.target.value;
}

class EditProfile extends Component {
    constructor(props) {
        super(props);
        document.title = "Edit My Profile";
        console.log(props);
    }


    render() {
        return (
            <div className="center">
                <Box
                    component="form">
                    <FormControl>
                        <TextField id="name-box" label="Name" variant="outlined" defaultvalue={this.props.currentUser.name}
                                   onChange={handleChange}/>
                        <Select
                            labelId="timezone-select-label"
                            id="timezone-select"
                            defaultValue={this.props.currentUser.name}
                            label="Timezone"
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={-12.0}>(UTC-12:00)</MenuItem>
                            <MenuItem value={-11.0}>American Samoa Time (UTC-11:00)</MenuItem>
                            <MenuItem value={-10.0}>Hawaii Time (UTC-10:00)</MenuItem>
                            <MenuItem value={-9.5}>Marquesas Islands Time (UTC-09:30)</MenuItem>
                            <MenuItem value={-9.0}>Alaska Standard Time (UTC-09:00)</MenuItem>
                            <MenuItem value={-8.0}>Los Angeles Standard Time (UTC-08:00)</MenuItem>
                            <MenuItem value={-7.0}>Denver Standard Time (UTC-07:00)</MenuItem>
                            <MenuItem value={-6.0}>St. Louis Standard Time (UTC-06:00)</MenuItem>
                            <MenuItem value={-5.0}>New York Standard Time (UTC-05:00)</MenuItem>
                            <MenuItem value={-4.0}>Nova Scotia Standard Time (UTC-04:00)</MenuItem>
                            <MenuItem value={-3.5}>Newfoundland Standard Time (UTC-03:30)</MenuItem>
                            <MenuItem value={-3.0}>Rio de Janeiro Time (UTC-03:00)</MenuItem>
                            <MenuItem value={-2.0}>Atlantic Ocean Time (UTC-02:00)</MenuItem>
                            <MenuItem value={-1.0}>Cape Verde Standard Time (UTC-01:00)</MenuItem>
                            <MenuItem value={0.0}>Greenwich Mean Time (UTC+00:00)</MenuItem>
                            <MenuItem value={1.0}>Paris Standard Time (UTC+01:00)</MenuItem>
                            <MenuItem value={2.0}>Helsinki Standard Time (UTC+02:00)</MenuItem>
                            <MenuItem value={3.0}>Moscow Time (UTC+03:00)</MenuItem>
                            <MenuItem value={3.5}>Iran Standard Time (UTC+03:30)</MenuItem>
                            <MenuItem value={4.0}>Dubai Time (UTC+04:00)</MenuItem>
                            <MenuItem value={4.5}>Afghanistan Time (UTC+04:30)</MenuItem>
                            <MenuItem value={5.0}>Pakistan Standard Time (UTC+05:00)</MenuItem>
                            <MenuItem value={5.5}>Indian Standard Time (UTC+05:30)</MenuItem>
                            <MenuItem value={5.75}>Nepal Standard Time (UTC+05:45)</MenuItem>
                            <MenuItem value={6.0}>Bangladesh Time (UTC+06:00)</MenuItem>
                            <MenuItem value={6.5}>Myanmar Time (UTC+06:30)</MenuItem>
                            <MenuItem value={7.0}>Indochina Time (UTC+07:00)</MenuItem>
                            <MenuItem value={8.0}>China Standard Time (UTC+08:00)</MenuItem>
                            <MenuItem value={9.0}>Japan Standard Time (UTC+09:00)</MenuItem>
                            <MenuItem value={9.5}>Darwin Time (UTC+09:30)</MenuItem>
                            <MenuItem value={10.0}>Sydney Standard Time (UTC+10:00)</MenuItem>
                            <MenuItem value={10.5}>(UTC+10:30)</MenuItem>
                            <MenuItem value={11.0}>Vanuatu Time (UTC+11:00)</MenuItem>
                            <MenuItem value={12.0}>Kamchatka Time (UTC+12:00)</MenuItem>
                        </Select>
                        <Button variant="contained"
                                onClick={() => {
                                    this.props.currentUser.name = newName;
                                    this.props.currentUser.timezone = newTZ;
                                    updateUser(this.props.currentUser);
                                }}
                        >Save</Button>
                    </FormControl>
                </Box>
            </div>
        )
    }
}

export default EditProfile