<template>
  <div>
    <div class="d-flex align-items-start flex-column p-1 mb-1" style="overflow-y: auto;">
      <!--<ul class="list-group">
         <li v-for="message in messages" :key="message.messageid" class="list-group-item d-flex">
          <div :class="{ 
            'd-flex flex-column align-items-end': message.senderid === user.userid, 
            'd-flex flex-column align-items-start': message.senderid !== user.userid }">
            <div class="rounded p-2" :class="{ 
              'bg-primary text-white': message.senderid === user.userid, 
              'bg-light': message.senderid !== user.userid }">
              <p class="mb-0">{{ message.messagetext }}</p>
            </div>
            <small class="text-muted mt-1">{{ message.timestamp }}</small>
            <small class="text-muted">Sender ID: {{ message.senderid }}</small>
          </div>
        </li> -->
        <div>                  {{ files }}        </div>
        <ul class="list-group">
          <div v-for="message in messages" :key="message.messageid" 
               :class="message.senderid !== user.userid ? 'justify-content-end d-flex p-1 m-1' : 'justify-content-start d-flex p-1 m-1'">
        
            <div class="d-flex p-1 m-1" 
                 :class="message.senderid !== user.userid ? 'rounded-pill bg-primary text-white' : 'rounded-pill bg-secondary text-white'">
              <p class="m-1">{{ message.messagetext }}</p>
            </div>
          </div>
        </ul>         
    </div>
    <form @submit.prevent="handleSendMessage" class="fixed-bottom p-2 bg-light">
      <div class="d-flex justify-content-evenly">
        <input type="text" class="form-control" v-model="messageText" placeholder="Enter your message..." />
        <!-- <label class="btn btn-light"> -->
        <input type="file" ref="fileInput" @change="uploadFile" />
        <i class="fa fa-paperclip"></i>
        <!-- </label> -->
        <button class="btn btn-primary">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import userGroups from '@/apiservice/userGroups';
  export default {
    data() {
      return {
        messageText:'',
        files,
        file
      }
    }, 
    computed: {
    ...mapGetters(['messages','SelectedGroup']),
    user(){
      return JSON.parse(localStorage.getItem("userData"));
    },
  },
    methods: {
      uploadFile(event) {
      file = event.target.files[0];
      userGroups.uploadFile(this.SelectedGroup, this.user.userid, file)
      .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    },
      handleSendMessage() {
        this.$store.dispatch('sendMessage', {
        groupId: this.SelectedGroup,
        senderId: this.user.userid,
        messageText: this.messageText
      });
      console.log('User Message ' + this.messageText + this.user.userid + this.SelectedGroup);
      this.messageText = '';
        // send the message and file to the server
      },
    },
    mounted() {
    userGroups.fetchFilesByGroup(this.SelectedGroup).then((response) => {
      this.files = response.data;
    });
  },
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