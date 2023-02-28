<template>
  <div>
<!-- Popups & Modals -->
    <UpdateModal/>
    <CreateGroupModal/>
    <ListContactModal/>
    <CreateContactModal/>
    <ListGroupsModal/>
    <EditContactModal/>
    <HeaderComp/>
    <div class="container">
    <div class="row ">
      <div class="col-3" >
        <LeftBarComp></LeftBarComp>
      </div>
        </div>
     </div>
     <div class="col-9" ref="scrollContainer" @scroll="handleScroll">
        <MessageComp> </MessageComp>
      </div>
      </div>
</template>
<script src="./js/mainComp.js"/>
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
    flex-direction: column;

    margin-left: 25%;
    max-height: 95vh;
    overflow-y: scroll;
    width: 75%;
    position: fixed;
    margin-bottom: 0%;
  }
  .container {
    margin-bottom: 5%;
    padding-bottom: 5%;
  }
  @media screen and (min-width: 0px) and (max-width: 700px) {
    .col-9{
      top: 8%; 
    }
    .col-3{
      flex-direction: column-reverse;
      margin-top: 7%;
      display: flex;
      justify-content: space-around;
      
    }
  }
  @media screen and (min-width: 701px){
    .col-9{
      top: 8%; 
      margin-left: 25%;
      max-height: 95vh;
      overflow-y: scroll;
      width: 75%;
      position: fixed;
      margin-bottom: 0%;
    } 
    .col-3
    {
      display:flex;
      justify-content: space-evenly;
      align-content: stretch;
      flex-wrap:nowrap;
      left: 0;
      width: 25%;
      overflow-y: scroll;
      margin-bottom: 5%;
      padding-bottom: 5%;
    }
  }
</style>