<template>
  <div>
    <HeaderComp></HeaderComp>
    <!-- <div class="border-right" id="sidebar-wrapper"> -->
    <div class="container">
      <div class="row ">
        <div class="col-3 bg-success">
          <LeftBarComp></LeftBarComp>
        </div>
          </div>
       </div>
       <div class="col-9" >
          <MessageComp> </MessageComp>
        </div>
        </div>
</template>

<script>
import MessageComp from './MessageComp.vue';
import HeaderComp from './HeaderComp.vue';
import LeftBarComp from './LeftBarComp.vue';
  export default {
    components:{
      MessageComp,
      HeaderComp,
      LeftBarComp
    },
    data() {
      return {
        user: {
          username: 'Elavarasan',
          about: 'Busy',
        },
        groups: [{
            "id": 1,
            "groupName": "New Group 1",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:46:25.182+00:00"
          },
          {
            "id": 4,
            "groupName": "New Group 2",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:59:14.718+00:00"
          },
          {
            "id": 5,
            "groupName": "Sample",
            "createdBy": "Elavarasan",
            "createdOn": "2023-02-10T05:01:40.101+00:00"
          },
          {
            "id": 1,
            "groupName": "New Group 1",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:46:25.182+00:00"
          },
          {
            "id": 4,
            "groupName": "New Group 2",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:59:14.718+00:00"
          },
          {
            "id": 5,
            "groupName": "Sample",
            "createdBy": "Elavarasan",
            "createdOn": "2023-02-10T05:01:40.101+00:00"
          },
          {
            "id": 1,
            "groupName": "New Group 1",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:46:25.182+00:00"
          },
          {
            "id": 4,
            "groupName": "New Group 2",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:59:14.718+00:00"
          },
          {
            "id": 5,
            "groupName": "Sample",
            "createdBy": "Elavarasan",
            "createdOn": "2023-02-10T05:01:40.101+00:00"
          },
          {
            "id": 1,
            "groupName": "New Group 1",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:46:25.182+00:00"
          },
          {
            "id": 4,
            "groupName": "New Group 2",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:59:14.718+00:00"
          },
          {
            "id": 5,
            "groupName": "Sample",
            "createdBy": "Elavarasan",
            "createdOn": "2023-02-10T05:01:40.101+00:00"
          },
          {
            "id": 1,
            "groupName": "New Group 1",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:46:25.182+00:00"
          },
          {
            "id": 4,
            "groupName": "New Group 2",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:59:14.718+00:00"
          },
          {
            "id": 5,
            "groupName": "Sample",
            "createdBy": "Elavarasan",
            "createdOn": "2023-02-10T05:01:40.101+00:00"
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .col-3 {
    background-color: #28364d;
    position: fixed;
    left: 0;
    top: 10%;
    height: 100vh;
    width: 25%;
    max-height: 100vh;
    overflow-y: scroll;
    margin-bottom: 5%;
    padding-bottom: 5%;
  }
  .col-9{
    top: 10%; 
    margin-left: 25%;
    max-height: 100vh;
    overflow-y: scroll;
    width: 75%;
    position: fixed;
    margin-bottom: 5%;
    background-color: lightcoral;
  }
  .container {
    margin-bottom: 5%;
    padding-bottom: 5%;
  }
</style>