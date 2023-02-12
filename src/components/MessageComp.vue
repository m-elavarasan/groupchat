<template>
  <div>
    <div>
      <ul class="list-group">
        <!-- {{  messages }} -->
        <li v-for="message in Object.keys(messages)" class="list-group-item d-flex">
          Hello {{  messages[message].messageid }}
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
        </li>
      </ul>
    </div>
    <form @submit.prevent="sendMessage" class="fixed-bottom p-2 bg-light">
      <div class="d-flex justify-content-evenly">
        <input type="text" class="form-control" v-model="userInputText" placeholder="Enter your message..." />
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
import { mapGetters} from "vuex";
  export default {
    data() {
      return {
        userInputText:'',
        page: 1,
        limit: 10,
        file: null
      }
    }, 
    computed: {
    ...mapGetters(['messages']),
    user(){
      return JSON.parse(localStorage.getItem("userData"));
    },
  },
    methods: {
      uploadFile(event) {
        this.file = event.target.files[0]
      },
      sendMessage() {
        // send the message and file to the server
        console.log('User Message ' + this.userInputText);
      },
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