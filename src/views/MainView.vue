<template>
  <div v-if="this.isLoadingLocal">
    <div id="loader">
      <b-spinner type="grow" variant="success"></b-spinner>
    </div>
  </div>
  <div v-else>
    <HeaderComp />
    <div class="container">
      <div class="row ">
        <div class="col-3">
          <LeftBarComp @fetchmsg="fetchmsg"></LeftBarComp>
        </div>
      </div>
    </div>
    <div class="col-9" ref="scrollContainer">
      <MessageComp @fetchmsg="fetchmsg" :isLoading="isLoading"> </MessageComp>
    </div>

    <!-- Popups & Modals -->
    <UpdateModal />
    <CreateGroupModal />
    <ListContactModal />
    <CreateContactModal />
    <ListGroupsModal @fetchmsg="fetchmsg" />
    <EditContactModal />

  </div>
</template>
<script src="./js/mainComp.js"/>
<style lang="scss" scoped>
.col-3 {
  background-color: #28364d;
  position: fixed;
  left: 0;
  top: 8%;
  height: 100vh;
  width: 25%;
  max-height: 100vh;
  overflow-y: scroll;
  margin-bottom: 5%;
  padding-bottom: 5%;
}

.col-9 {
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
  .col-9 {
    top: 8%;
  }

  .col-3 {
    flex-direction: column-reverse;
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    align-items: baseline;
    overflow-x: hidden;
    flex-direction: row-reverse;


  }
}

@media screen and (min-width: 1440px) {
  .col-9 {
    top: 8%;
  }

  .col-3 {
    top: 8%;

  }
}

@media screen and (min-width: 701px) {
  .col-9 {
    top: 8%;
    margin-left: 25%;
    max-height: 95vh;
    overflow-y: scroll;
    width: 75%;
    position: fixed;
    margin-bottom: 0%;
  }
  .col-3 {
    display: flex;
    justify-content: space-evenly;
    align-content: stretch;
    flex-wrap: nowrap;
    left: 0;
    width: 25%;
    overflow-y: scroll;
    margin-bottom: 5%;
    padding-bottom: 5%;
  }
}

</style>