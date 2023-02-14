<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar" style="background-color:#FDE2C2">
      <a class="navbar-brand ml-2 " v-for="groupData in Object.keys(selectedGroupData).slice(0, 1)">{{
        selectedGroupData[groupData].group.groupname
      }}</a>
      <div class="navbar" id="navbarNav">
        <span>User ID:</span>
        <ul class="navbar-nav" v-for="groupData in Object.keys(selectedGroupData).slice(0, 1)">
          <li class="nav-item" v-for="member in selectedGroupData[groupData].group.members">
            <a class="nav-link">{{ member.userid }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="d-flex flex-column p-1 mb-1" style="overflow-y: auto;">
      <div class="d-flex flex-column">
        <h5 class="p-1">Available Files:</h5>
        <div v-for="file in files" :key="file.id" class="p-1">
          <a :href="file.url" class="btn btn-link">{{ file.name }}</a>
        </div>
      </div>
      <ul class="list-group">
        <div v-for="message in messages" :key="message.messageid"
          :class="message.senderid == user.userid ? 'justify-content-end d-flex p-1 m-1' : 'justify-content-start d-flex p-1 m-1'">
          <small class="text-muted text-muted mt-2 p-2">User:{{message.senderid}}</small>
          <div class="d-flex p-1 m-1"
            :class="message.senderid == user.userid ? 'rounded-pill bg-primary text-white' : 'rounded-pill bg-secondary text-white'">
            <p class="m-1">{{ message.messagetext }}</p> 
      </div>
      <!-- <div class="text-muted">{{ message.timestamp }}</div> -->
    </div>
      </ul>      
    </div>
    <form @submit.prevent="handleSendMessage" class="fixed-bottom p-2 bg-light">
      <div class="d-flex justify-content-evenly">
        <input type="text" class="form-control" v-model="messageText" placeholder="Enter your message..." />
        <input type="file" ref="fileInput" @change="uploadFile" />
        <i class="fa fa-paperclip"></i>
        <button class="btn btn-primary">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import userGroups from '@/apiservice/userGroups';
export default {
  data() {
    return {
      messageText: '',
      files: '',
      btnShow: false
    }
  },
  computed: {
    ...mapGetters(['messages', 'SelectedGroup', 'selectedGroupData']),
    user() {
      return JSON.parse(localStorage.getItem("userData"));
    },
  },
  methods: {
    ...mapActions(['getMessages']),
    uploadFile(event) {
      const file = event.target.files[0];
      userGroups.uploadFile(this.SelectedGroup, this.user.userid, file)
        .then(response => {
          console.log(response);
          alert("File Uploaded");
          this.fetchFile(this.SelectedGroup)
        })
        .catch(error => {
          console.error(error);
        });
      this.$refs.fileupload.$refs.input.value = null
    },
    fetchFile(groupId) {
      userGroups.fetchFilesByGroup(this.SelectedGroup).then((response) => {
        this.files = response.data;
      })
    },
    async handleSendMessage() {
      console.log('inside handleSendMessage');
      if (this.messageText !== '') {
        //   this.$store.dispatch('sendMessage', {
        //     groupId: this.SelectedGroup,
        //     senderId: this.user.userid,
        //     messageText: this.messageText
        //   });

        //   console.log('User Message ' + this.messageText + this.user.userid + '' + this.SelectedGroup);
        //   try {
        //     await this.getMessages({
        //       groupId: this.SelectedGroup,
        //       userId: this.user.userid,
        //     });
        //   }
        //   catch (error) {
        //     console.error(error);
        //   }
        //   this.messageText = '';
        //   // send the message and file to the server
        // }
        await userGroups.sendMessage(this.SelectedGroup, this.user.userid, this.messageText)
          .then(response => {
            console.log(response.data);
            this.fetchMessages()
            this.messageText = '';

          })
          .catch(error => {
            console.error(error);
          });
      }
      else {
        alert("Message Cannot be Empty")
      }
    },
    async fetchMessages() {
      console.log(this.messageText);
      try {
        await this.getMessages({
          groupId: this.SelectedGroup,
          userId: this.user.userid,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  watch: {
    SelectedGroup: function (SelectedGroup) {
      // console.log("changed");
      this.fetchFile(this.SelectedGroup)
    },
  }
}
</script>

<style>
.fixed-bottom {
  margin-left: 25%;
  height: 10%;
  position: fixed;
  bottom: 0;
}

.fixed-bottom input[type="text"] {
  width: 60%;
}

.fixed-bottom input[type="file"] {
  width: 20%;
  padding: 1%;
}

.btn {
  width: 20%;
  padding: 1%;
}

.list-group-item {
  border: 0;
  padding: 0.75rem 1.25rem;
}

.justify-content-start {
  background-color: none;
}

.justify-content-end {
  background-color: none;
}
</style>