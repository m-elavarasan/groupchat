<template>
  <div>
    <HeaderCompTesting></HeaderCompTesting>
    <!-- <div class="border-right" id="sidebar-wrapper"> -->
    <div class="container">
      <div class="row ">
        <div class="col-3">
          <LeftBarCompTesting></LeftBarCompTesting>
        </div>
          </div>
       </div>
       <div class="col-9" >
          <MessageCompTesting > </MessageCompTesting>
        </div>
        </div>
</template>

<script>
import MessageCompTesting from './MessageCompTesting.vue';
import HeaderCompTesting from './HeaderCompTesting.vue';
import LeftBarCompTesting from './LeftBarTesting.vue';
  export default {
    components:{
      MessageCompTesting,
      HeaderCompTesting,
      LeftBarCompTesting
    },
    data() {
      return {
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
  }
  .container {
    margin-bottom: 5%;
    padding-bottom: 5%;
  }
</style>