import React from "react";
import Person from "@mui/icons-material/Person"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

export const AppSidebarData = [

    {
        title: "Dashboard" ,
        icon: <DashboardIcon />,
        link: "",
    },
    {
        title: "Profile" ,
        icon: <Person />,
        link: "",
    },
    {
        title: "Groups" ,
        icon: <GroupsIcon />,
        link: "",
    },
    {
        title: "Help" ,
        icon: <HelpIcon/>,
        link: "",
    },
    {
        title: "Logout" ,
        icon: <LogoutIcon/>,
        link: "/logout",
    },
    // {
    //     title: "" ,
    //     icon: "",
    //     link: "",
    // },





]