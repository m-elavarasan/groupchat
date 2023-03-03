<template>
  <div v-if="isLoading">
    <div id="loader">
      <b-spinner type="grow" variant="primary"></b-spinner>
    </div>
  </div>
  <div v-else>
    <div style="margin-bottom: 15%;" v-if="showBase">
      <div class="flex-wrap">

        <nav id="sticky-top" style="background-color:#f2f3f3">
          <div class="navbar" id="navbarSupported">
            <a class="navbar-brand ml-2 " v-for="groupData in Object.keys(selectedGroupData).slice(0, 1)">{{
              selectedGroupData[groupData].group.groupname
            }}</a>
            <span>User ID:</span>
            <ul class="navbar-nav" v-for="groupData in Object.keys(selectedGroupData).slice(0, 1)">
              <li class="nav-item" v-for="member in selectedGroupData[groupData].group.members">
                <a class="nav-link">{{ member.userid }}</a>
              </li>
            </ul>
            <button v-if="this.group" type="button" class="btn btn-danger fixed-right" @click="delGroup"> Delete
              Group</button>
          </div>
        </nav>
      </div>
      <div class="d-flex flex-column" style="overflow-y: auto;">
        <h5 class="files">Available Files:</h5>
        <div v-for="file in files" :key="file.id" class="p-1">
          <a :href="file.url" class="btn btn-link">{{ file.name }}</a>
        </div>
      </div>
      <div id="msgcont" class="mb-10">
        <ul class="list-group m-10">
          <div v-for="message in allMsg"
            :class="message.senderid == user.userid ? 'justify-content-end d-flex p-1 m-1' : 'justify-content-start d-flex p-1 m-1'">
            <small class="text-muted text-muted mt-2 p-2">User:{{ message.senderid }}</small>
            <div class="d-flex p-1 m-1"
              :class="message.senderid == user.userid ? 'rounded-pill bg-primary text-white' : 'rounded-pill bg-secondary text-white'">
              <p class="m-1">{{ message.messagetext }}</p>
            </div>
            <small class="text-muted text-muted mt-2 p-2">{{ message.timestamp | formatDate }}</small>

          </div>
        </ul>
      </div>
      <form @submit.prevent="handleSendMessage" class="fixed-bottom p-2 bg-light">
        <div class="d-flex justify-content-evenly">
          <input type="text" class="form-control p-2" v-model="messageText" placeholder="Enter your message..." />
          <input type="file" class="form-control p-2" ref="fileInput" />
          <i class="fa fa-paperclip"></i>
          <button class="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
    <div v-else>
      <img src="@/assets/background.jpg" class="img-fluid"
        style="background-size:cover; opacity: 0.1;top:0; left: 0; bottom: 0; right: 0 ;overflow:hidden;">
    </div>
  </div>
</template>

<script src="./js/messageComp.js" />
<style>
.list-group {
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

.files {
  margin-top: 15%;
}

#loader {
  position: fixed;
  top: 50%;
  left: 60%;
}

#sticky-top {
  position: fixed;
  width: -webkit-fill-available;
  padding: 1%;
}

@media screen and (min-width: 0px) and (max-width: 700px) {
  .img-fluid {
    position: fixed;
    margin-left: 25%;
    height: -webkit-fill-available;
  }

  .navbar {
    justify-content: space-evenly;
  }
}</style>