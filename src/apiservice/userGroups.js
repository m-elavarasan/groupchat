import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8085",
});
export default {
  async fetchGroups(mobile) {
    try {
      const response = await API.get(`/showGroup?mobilenum=${mobile}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  displayMessagePages(page, limit, groupId, userId) {
    return API.get(
      `/displayMessagePages/${page}/${limit}?groupid=${groupId}&userid=${userId}`
    );
  },
  sendMessage(groupId, senderId, messageText) {
    return API.post("/sendMessage", {
      groupId,
      senderId,
      messageText,
    });
  },
  async fetchGroupMembers(groupId) {
    try {
      const response = await API.get(
        `/displayAgroupMembers?groupid=` + groupId
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  uploadFile(groupId, senderId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return API.post(
      `/sendFile?groupid=${groupId}&senderid=${senderId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
  async fetchFilesByGroup(groupId) {
    try {
      const response = await API.get(`/FilesByGroupid?groupid=${groupId}`);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  async createGroup(groupname, createdby, userid) {
    try {
      const response = await API.post(
        `/createGroup?groupname=${groupname}&createdby=${createdby}&userid=${userid}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  async deleteGroup(groupId) {
    try {
      const response = await API.delete(`/deleteGroup?groupid=${groupId}`);
      return response.data,
      console.log(groupId +'Deleted Successfully')
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};
