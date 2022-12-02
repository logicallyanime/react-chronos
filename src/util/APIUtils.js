import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const GROUP_API_URL = API_BASE_URL + "/api/v1/group";
const USER_API_URL = API_BASE_URL + "/api/v1/user";
const MEETING_API_URL = API_BASE_URL + "/api/v1/meeting";

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response => {
            return response.text()
        })
        .then((data) => {
            try{
                return(data ? JSON.parse(data) : {})
            }catch(e){
                console.log("backdoor");
                return data;
            }
        })
        .catch((error) => {
            return Promise.reject(error);
        })
    //
    // return fetch(options.url, options)
    // .then(response =>
    //     response.json().then(json => {
    //         if(!response.ok) {
    //             return Promise.reject(json);
    //         }
    //         return json;
    //     })
    // );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/api/v1/user/me",
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function getGroup(groupId) {
    return request({
        url: GROUP_API_URL + "/get/" + groupId,
        method: "GET"
    });
}

export function getGroupName(groupId) {
    return request({
        url: GROUP_API_URL + "/getgroupname/" + groupId,
        method: "Get"
    })
}

export function getUserList(groupId) {
    return request({
        url: GROUP_API_URL + "/getUserList/" + groupId,
        method: "GET"
    })
}

export function getGroups(userId) {
    let req = request({
        url: GROUP_API_URL + "/" + userId,
        method: "GET"
    });
    req.then((r) => console.log(r))
    return req
}

export function createGroup(userId) {
    return request({
        url: GROUP_API_URL + "/create/" + userId,
        method: "POST"
    });
}

export function addGroup(group) {
    return request({
        url: GROUP_API_URL,
        method: "POST",
        body: JSON.stringify(group)
    });
}

export function removeGroup(groupId) {
    return request({
        url: GROUP_API_URL + "/remove",
        method: "REQUEST",
        body: JSON.stringify(groupId)
    });
}

export function updateGroup(groupId, groupName, userList, meeting, eventList){
    return request({
        url: GROUP_API_URL + "/" + "groupId" +"/?name=" + groupName + "&userList=" + userList +
            "&meeting=" + meeting + "&eventList=" + eventList,
        method: "PATCH"
    });
}

export function updateGroupName(groupId, groupName){
    return request({
        url: GROUP_API_URL + "/updateGroupName/" + groupId,
        method: "PATCH",
        body: JSON.stringify(groupName)
    });
}

export function addUserToGroup(groupId, email){
    return request({
        url: GROUP_API_URL + "/adduser/" + groupId,
        method: "PATCH",
        body: JSON.stringify(email)
    });
}

export function removeUserFromGroup(groupId, email){
    return request({
        url: GROUP_API_URL + "/removeuser/" + groupId,
        method: "PATCH",
        body: JSON.stringify(email)
    });
}

export function addUserCalendar(groupId, eventList){
    return request({
        url: GROUP_API_URL + "/addusercal",
        method: "PATCH",
        body: JSON.stringify(groupId, eventList)
    });
}

export function determineMeetingTime(groupId, email, meetingTime, date){
    return request({
        url: GROUP_API_URL + "/dtm/" + groupId + "?email=" + email + "&meetingTime=" + meetingTime + "&sDate=" + date,
        method: "PATCH",
    });
}

export function setMeeting(groupId, meeting){
    return request({
        url: GROUP_API_URL + "/meeting",
        method: "PATCH",
        body: JSON.stringify(groupId, meeting)
    });
}

export function getUser(userId) {
    return request({
        url: USER_API_URL,
        method: 'GET',
        body: JSON.stringify(userId)
    });
}

export function userExists(userEmail) {
    return request({
        url: USER_API_URL + '/exists/' + userEmail,
        method: 'GET'
    })
}

export function getUserByEmail(userEmail) {
    return request({
        url: USER_API_URL + "/getUserByEmail/" + userEmail,
        method: 'GET'
    });
}

export function getUserIdByEmail(userEmail) {
    return request({
        url: USER_API_URL + "/getuseridbyemail/" + userEmail,
        method: 'GET'
    })
}


export function registerNewUser(user) {
    return request({
        url: USER_API_URL,
        method: 'POST',
        body: JSON.stringify(user)
    });
}

export function addContactAsUser(newName) {
    return request({
        url: USER_API_URL + "/contact",
        method: 'POST',
        body: JSON.stringify(newName)
    });
}

export function removeUser(userId) {
    return request({
        url: USER_API_URL,
        method: 'DELETE',
        body: JSON.stringify(userId)
    });
}

export function updateUser(user) {
    return request({
        url: USER_API_URL + "/update",
        method: 'PATCH',
        body: JSON.stringify(user)
    });
}

export function addToGroupEvents(groupId) {
    return request({
        url: MEETING_API_URL + "/addToGCal/" + groupId,
        method: 'POST'
    })
}

export function sendEmails(groupId) {
    return request({
        url: MEETING_API_URL + "/sendEmails/" + groupId,
        method: 'POST'
    })
}


