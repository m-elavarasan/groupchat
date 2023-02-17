<template>
  <div>
    <HeaderComp/>
    <UpdateModalVue/>
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
</style>