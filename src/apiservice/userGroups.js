import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8085",
});

export default {
  fetchGroups(mobile, success, fail) {
    console.log(mobile);
    API.get(`/showGroup?mobilenum=${mobile.mobile}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          mobile.success(res.data)
      }
    })
      .catch((err) => {
        mobile.fail(err);
      });
  },
  displayAllMsg(data,success,fail)
  {
    API.get(`http://localhost:8085/displaySpecific?groupid=${data.groupid}&userid=${data.userid}`)
    .then((res) => {
      if (res.status === 200) {
        success.success(res.data)
    }
  })
    .catch((err) => {
      success.fail(err);
    })
  },

  fetchGroupMembers(groupId, success, fail) {
    API.get(`/displayAgroupMembers?groupid=${groupId}`)
    .then((res) => {
      if (res.status === 200) {
        success.success(res.data)
    }
  })
    .catch((err) => {
      success.fail(err);
    })
  },
  fetchFilesByGroup(groupId, success, fail) {
    API.get(`/FilesByGroupid?groupid=${groupId}`)
        .then((res) => {
        if (res.status === 200) {
          success.success(res.data)
      }
    })
      .catch((err) => {
        success.fail(err);
      })
  },
  displayMessagePages(page, limit, groupId, userId, success, fail) {
    API.get(
      `/displayMessagePages/${page}/${limit}?groupid=${groupId}&userid=${userId}`
    )
      .then((response) => success(response.data))
      .catch((error) => fail(error));
  },
  sendMessage(groupId, senderId, messageText, success, fail) {
    API.post("/sendMessage", { groupId, senderId, messageText })
      .then((response) => success.success(response.data))
      .catch((error) => success.fail(error));
  },
  // fetchGroupMembers(groupId, success, fail) {
  //   API.get(`/displayAgroupMembers?groupid=${groupId}`)
  //     .then((response) => success(response.data))
  //     .catch((error) => fail(error));
  // },
  uploadFile(groupId, senderId, file, success, fail) {
    const formData = new FormData();
    formData.append("file", file);
    API.post(`/sendFile?groupid=${groupId}&senderid=${senderId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => success.success(response))
      .catch((error) => success.fail(error));
  },
  createGroup(groupname, createdby, userid, success, fail) {
    API.post(
      `/createGroup?groupname=${groupname}&createdby=${createdby}&userid=${userid}`
    )
      .then((response) => success.success(response.data))
      .catch((error) => success.fail(error));
  },
  deleteGroup(groupId, success, fail) {
    API.delete(`/deleteGroup?groupid=${groupId}`)
      .then(() => {
        success.success();
        console.log(groupId + " Deleted Successfully");
      })
      .catch((error) => success.fail(error));
  },
};
