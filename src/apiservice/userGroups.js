import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8085",
});

export default {
  fetchGroups(mobile, success, fail) {
    API.get(`/showGroup?mobilenum=${mobile}`)
      .then((response) => success(response.data))
      .catch((error) => fail(error));
  },
  displayMessagePages(page, limit, groupId, userId, success, fail) {
    API.get(`/displayMessagePages/${page}/${limit}?groupid=${groupId}&userid=${userId}`)
      .then((response) => success(response.data))
      .catch((error) => fail(error));
  },
  sendMessage(groupId, senderId, messageText, success, fail) {
    API.post("/sendMessage", { groupId, senderId, messageText })
      .then((response) => success(response.data))
      .catch((error) => fail(error));
  },
  fetchGroupMembers(groupId, success, fail) {
    API.get(`/displayAgroupMembers?groupid=${groupId}`)
      .then((response) => success(response.data))
      .catch((error) => fail(error));
  },
  uploadFile(groupId, senderId, file, success, fail) {
    const formData = new FormData();
    formData.append("file", file);
    API.post(`/sendFile?groupid=${groupId}&senderid=${senderId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => success(response.data))
      .catch((error) => fail(error));
  },
  fetchFilesByGroup(groupId, success, fail) {
    API.get(`/FilesByGroupid?groupid=${groupId}`)
      .then((response) => success(response.data))
      .catch((error) => fail(error));
  },
  createGroup(groupname, createdby, userid, success, fail) {
    API.post(`/createGroup?groupname=${groupname}&createdby=${createdby}&userid=${userid}`)
      .then((response) => success(response.data))
      .catch((error) => fail(error));
  },
  deleteGroup(groupId, success, fail) {
    API.delete(`/deleteGroup?groupid=${groupId}`)
      .then(() => {
        success();
        console.log(groupId + " Deleted Successfully");
      })
      .catch((error) => fail(error));
  },
};
