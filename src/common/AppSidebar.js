import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../app/App.css';
import {AppSidebarData} from "./AppSidebarData";


class AppSidebar extends Component{
    render() {
        return (
            <div className="Sidebar">
                <ul className="SidebarList">
                    {AppSidebarData.map((val, key) => {
                        function Logout(props) {
                            let val = props.val;
                            if (val.title === "Logout") {
                                return (
                                    <li key={key} className="row" onClick={props.onLogout}>
                                        <div id="icon">{val.icon}</div>
                                        <div id="link">{val.title}</div>
                                    </li>
                                )
                            }
                            return (
                                <li
                                    key={key}
                                    className="row"
                                    onClick={() => {
                                        window.location.pathname = val.link;
                                    }
                                    }
                                >
                                    <div id="icon">{val.icon}</div>
                                    <div id="link">{val.title}</div>
                                </li>
                            )
                        }

                        return (<Logout val={val} onLogout={this.props.handleLogout}/>);

                    })
                    }

                </ul>
            </div>
            )
        //         {AppSidebarData.map((val, key) =>
        //             {
        //                 function logout(val)
        //                 {
        //                     if(val.title === "Logout")
        //                     {
        //                         return(
        //                             <li
        //                             key={key}
        //                             className="row"
        //                             onClick={this.props.onLogout}>
        //                         )
        //                     }
        //                     return (
        //                                 <li
        //                                     key={key}
        //                                     className="row"
        //                                     onClick={() => {
        //                                         window.location.pathname = val.link;
        //                                     }
        //                                     }
        //                                 >)
        //                 }
        //                 return (
        //                     <li
        //                         key={key}
        //                         className="row"
        //                         onClick={() => {
        //                             window.location.pathname = val.link;
        //                             }
        //                         }
        //                     >
        //                         <div id="icon">{val.icon}</div> <div id="link">{val.title}</div>
        //                     </li>
        //                 )
        //             }
        //         }
        //
        // );
    }
}
export default AppSidebar;
