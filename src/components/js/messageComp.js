import { mapGetters,mapActions} from "vuex";
import userGroups from "@/apiservice/userGroups";
export default {
  data() {
    return {
      messageText: "",
      files: "",
      btnShow: false,
      group:'',
      showBase:false,
    };
  },
  computed: {
    ...mapGetters(["messages","selectedGroupData","allMsg"]),
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
        console.log("Escape pressed")
        this.showBase=false
      }
    })
  },
  destroyed() {
    window.removeEventListener("keyup", this.handleEscapeKey);
  },
  methods: {
    ...mapActions(["intialFetchMessages","fetchGroups"]),
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

    uploadFile(event) {
      const file = event.target.files[0];
      userGroups.uploadFile(this.group,this.user.userid,file,{
        success:(res)=>{this.fetchFile(this.group)},
        fail:(err)=>{console.error(err);}
      })
      
    },
    fetchFile(groupId) {
      userGroups.fetchFilesByGroup(groupId,{
        success:(res)=>{ this.files = res},
        fail:(err)=>{console.error(err);}
      })
      console.log(this.files);
    },

    async handleSendMessage() {
      
      console.log(this.group,this.user.userid);

      if (this.messageText !== "") {
        userGroups.sendMessage(this.group,this.user.userid, this.messageText,{
          success:(res)=>{this.messageText = "", this.$emit('fetchmsg',this.group)},
          fail:(err)=>{console.error(err);}
          })
      } else {
        alert("Message Cannot be Empty");
      }
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
    async delGroup(){
      let text = "Are you sure to Delete \n Either Delete or Cancel.";
      if (confirm(text) == true) {
        try {
          userGroups.deleteGroup((this.group));
          this.fetchGroups(this.user.userid)
          localStorage.setItem('groupId', 0);
          this.showBase=false
        } catch (error) {
          console.error(error);
        }
      } 
    
    }
  },
  watch: {
    selectedGroupData: function (selectedGroupData) {    
      this.showBase=true
      this.fetchFile(localStorage.getItem("groupId"))
      this.group=JSON.parse(localStorage.getItem("groupId"))
    },
  }
};
