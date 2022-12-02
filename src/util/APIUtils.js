import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const GROUP_API_URL = API_BASE_URL + "/api/v1/group";
const USER_API_URL = API_BASE_URL + "/api/v1/user";

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
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
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

export function getCurrentUserId() {

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
        url: GROUP_API_URL + "/get",
        method: "REQUEST",
        body: JSON.stringify(groupId)
    });
}

export function getGroups(userId) {
    return request({
        url: GROUP_API_URL + "/" + userId,
        method: "GET"
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

export function updateGroup(group){
    return request({
        url: GROUP_API_URL,
        method: "PATCH",
        body: JSON.stringify(group)
    });
}

export function addUserToGroup(groupId, user){
    return request({
        url: GROUP_API_URL + "/adduser",
        method: "PATCH",
        body: JSON.stringify(groupId, user)
    });
}

export function removeUserFromGroup(groupId, user){
    return request({
        url: GROUP_API_URL + "/removeuser",
        method: "PATCH",
        body: JSON.stringify(groupId, user)
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
        url: GROUP_API_URL + "/dtm",
        method: "REQUEST",
        body: JSON.stringify(groupId, email, meetingTime, date)
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

export function updateUser(userId) {
    return request({
        url: USER_API_URL + "/update",
        method: 'PATCH',
        body: JSON.stringify(userId)
    });
}


