import { mapGetters,mapActions} from "vuex";
import userGroups from "@/apiservice/userGroups";
export default {
  data() {
    return {
      messageText: "",
      files: "",
      btnShow: false,
      group:''
    };
  },
  computed: {
    ...mapGetters(["messages","selectedGroupData"]),
    user() {
      return JSON.parse(localStorage.getItem("userData"));
    },
    id() {
      return JSON.parse(localStorage.getItem("groupId"))
    },
  },
  methods: {
    ...mapActions(["intialFetchMessages"]),
    uploadFile(event) {
      const file = event.target.files[0];
      userGroups
        .uploadFile(this.group, this.user.userid, file)
        .then((response) => {
          console.log(response);
          alert("File Uploaded");
          this.fetchFile(this.group);
        })
        .catch((error) => {
          console.error(error);
        });
        this.$refs.fileInput.value= null
      },
    fetchFile(groupId) {
      userGroups.fetchFilesByGroup(groupId).then((response) => {
        this.files = response.data;
      })
    },
    async handleSendMessage() {
      
      console.log("inside handleSendMessage");
      console.log(this.group,this.user.userid);
      if (this.messageText !== "") {
        await userGroups
          .sendMessage(this.group, this.user.userid, this.messageText)
          .then((response) => {
            console.log(response.data);
            this.fetchMessages();
            this.messageText = "";
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        alert("Message Cannot be Empty");
      }
    },
    async fetchMessages() {
      console.log('Method Called');
      try {
        await this.intialFetchMessages(({
          groupId:this.group,
          userId: this.user.userid,
          }));
      } catch (error) {
        console.error(error);
      }
    },
  },
  watch: {
    selectedGroupData: function (selectedGroupData) {    
      this.fetchFile(localStorage.getItem("groupId"))
      this.group=JSON.parse(localStorage.getItem("groupId"))
    },
  }
};
