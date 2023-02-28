<template>
  <div style="margin-bottom: 15%;" v-if="showBase">
    <div class="flex-wrap">

    <nav class="navbar navbar-expand-lg navbar sticky-top" style="background-color:#f2f3f3">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupported" aria-controls="navbarSupported" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupported">
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
      <button v-if="this.group" type="button" class="btn btn-danger fixed-right" @click="delGroup"> Delete Group</button>
   </div>
    </nav>
      </div>
    <div class="d-flex flex-column p-1 mb-1" style="overflow-y: auto;">
      <div class="d-flex flex-column">
        <h5 class="p-1">Available Files:</h5>
        <div v-for="file in files" :key="file.id" class="p-1">
          <a :href="file.url" class="btn btn-link">{{ file.name }}</a>
        </div>
      </div>
      </div>
  <div id="msgcont" class="mb-10">
    <ul class="list-group m-10">
      <div v-for="message in messages"
        :class="message.senderid == user.userid ? 'justify-content-end d-flex p-1 m-1' : 'justify-content-start d-flex p-1 m-1'">
        <small class="text-muted text-muted mt-2 p-2">User:{{message.senderid}}</small>
        <div class="d-flex p-1 m-1"
          :class="message.senderid == user.userid ? 'rounded-pill bg-primary text-white' : 'rounded-pill bg-secondary text-white'">
          <p class="m-1">{{ message.messagetext }}</p> 
    </div>
  </div>
    </ul> 
  </div>
  <form @submit.prevent="handleSendMessage" class="fixed-bottom p-2 bg-light">
    <div class="d-flex justify-content-evenly">
      <input type="text" class="form-control p-2" v-model="messageText" placeholder="Enter your message..." />
      <input type="file" class="form-control p-2" ref="fileInput" @change="uploadFile" />
      <i class="fa fa-paperclip"></i>
      <button class="btn btn-primary">Send</button>
    </div>
  </form>
  </div>
  <div v-else>
    <img src="@/assets/background.jpg" class="img-fluid" style="background-size:cover; opacity: 0.1;top:0; left: 0; bottom: 0; right: 0 ;overflow:hidden;">
    <!-- <div style="background-image: url('@/assets/background.jpg'); opacity: 0.1;  background-size: cover;"></div> -->
  </div>
</template>

<script src="./js/messageComp.js" />
<style>
    .list-group
    {
     margin-bottom: 25%; 
    }
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
  @media screen and (min-width: 0px) and (max-width: 700px) {
    .img-fluid{
      position: fixed;
      margin-left: 25%;
      height: -webkit-fill-available;
    }
  }
</style>