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

import MessageComp from '@/components/MessageComp.vue'
import HeaderComp from '@/components/HeaderComp.vue';
import LeftBarComp from '@/components/LeftBarComp.vue'
  export default {
    components:{
      MessageComp,
      HeaderComp,
      LeftBarComp
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