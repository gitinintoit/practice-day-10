import axios from "axios";

export function getAllSkills(succesCB,errorCB){
    axios.get(process.env.REACT_APP_SKILLS_URL).then(succesCB).catch(errorCB);
}

export function saveDataInDB(data,succesCB,errorCB){
    axios.post(process.env.REACT_APP_SERVER_URL, data).then(succesCB).catch(errorCB);
}

export function updateUserList(succesCB){
    axios.get(process.env.REACT_APP_SERVER_URL).then(succesCB);
}

export function deleteUserFromUI(id,successCB){
    axios.delete(process.env.REACT_APP_SERVER_URL + id).then(successCB);
     
}