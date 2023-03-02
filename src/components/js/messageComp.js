import { mapGetters, mapActions } from "vuex";
import userGroups from "@/apiservice/userGroups";
import toastMixin from "@/mixins/toastMixin";

export default {
  data() {
    return {
      messageText: "",
      files: "",
      btnShow: false,
      group: "",
      showBase: false,
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  mixins: [toastMixin],
  computed: {
    ...mapGetters(["messages", "selectedGroupData", "allMsg"]),
    user() {
      return JSON.parse(localStorage.getItem("userData"));
    },
    // id() {
    //   return JSON.parse(localStorage.getItem("groupId"))
    // },
  },
  mounted() {
    window.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        console.log("Escape pressed");
        this.showBase = false;
      }
    });
  },
  destroyed() {
    window.removeEventListener("keyup", this.handleEscapeKey);
  },
  methods: {
    ...mapActions(["intialFetchMessages", "fetchGroups"]),
    // uploadFile(event) {
    //   const file = event.target.files[0];
    //   userGroups
    //     .uploadFile(this.group, this.user.userid, file)
    //     .then((response) => {
    //       console.log(response);
    //       alert("File Uploaded");
    //       this.fetchFile(this.group);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //     this.$refs.fileInput.value= null
    //   },


   sendMessage() {
    if (this.messageText.length <= 250) {
      userGroups.sendMessage(this.group, this.user.userid, this.messageText, {
        success: (res) => {
          this.messageText = "";
          this.$emit("fetchmsg", this.group);
        },
        fail: (err) => {
          console.error(err);
        },
      });
    } else {
      this.displayErrorMessage(
        "Message is too long (maximum 250 characters)",
        "danger"
      );
    }
    },
  uploadFile(file){
      userGroups.uploadFile(this.group, this.user.userid, file, {
        success: (res) => {
          this.fetchFile(this.group);
          this.$refs.fileInput.value = "";
        },
        fail: (err) => {
          console.error(err);
        },
      });
  },
    handleSendMessage() {
      const file = this.$refs.fileInput.files[0];
      if (file && this.messageText) {
        this.uploadFile(file),
        this.sendMessage()
      }
      else if(this.messageText)
      {
        this.sendMessage()
      }
      else if(file)
      {
        this.uploadFile(file)
      }
      else {
        this.displayErrorMessage("Message Cannot be Empty", "danger");
      }
    },    
    fetchFile(groupId) {
      userGroups.fetchFilesByGroup(groupId, {
        success: (res) => {
          this.files = res;
        },
        fail: (err) => {
          console.error(err);
        },
      });
      console.log(this.files);
    },

    // async handleSendMessage() {

    //   console.log(this.group,this.user.userid);

    //   if (this.messageText !== "") {
    //     await userGroups
    //       .sendMessage(this.group, this.user.userid, this.messageText)
    //       .then((response) => {
    //         console.log(response.data);
    //         this.fetchMessages();
    //         this.messageText = "";
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   } else {
    //     alert("Message Cannot be Empty");
    //   }
    // },
    // async fetchMessages() {
    //   console.log('Method Called');
    //   try {
    //     await this.intialFetchMessages(({
    //       groupId:this.group,
    //       userId: this.user.userid,
    //       }));
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    async delGroup() {

      this.displayConfirmation("Are you sure to Delete", "danger")
      .then((response) => {
        if (response) {
          userGroups.deleteGroup(this.group, {
            success: () => {
              console.log(this.user.userid);
              this.fetchGroups({
                mobile: this.user.userid,
                success: (groups) => {},
                fail: (error) => {
                  console.error(error);
                },
              });
              localStorage.setItem("groupId", 0);
              this.showBase = false;
            }     
           })
          }
        })
      .catch((error) => {
        console.error(error); // handle error
      });  
    },
  },
  timeSince(date) {},
  filters: {
    formatDate(value) {
      const date = new Date(value);
      var seconds = Math.floor((new Date() - date) / 1000);
      var interval = seconds / 31536000;
      if (interval > 1) {
        return Math.floor(interval) + " years ago";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months ago";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days ago";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hour ago";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
      }
      return Math.floor(seconds) + " seconds ago";

      // const day = date.getDate().toString().padStart(2, "0");
      // const month = (date.getMonth() + 1).toString().padStart(2, "0");
      // const year = date.getFullYear().toString();
      // const hours = date.getHours().toString().padStart(2, '0');
      // const minutes = date.getMinutes().toString().padStart(2, '0');
      // const seconds = date.getSeconds().toString().padStart(2, '0');
      // return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
      // return `${day}-${month}-${year}`;
    },
  },
  watch: {
    selectedGroupData: function (selectedGroupData) {
      this.showBase = true;
      this.fetchFile(localStorage.getItem("groupId"));
      this.group = JSON.parse(localStorage.getItem("groupId"));
    },
  },
};
