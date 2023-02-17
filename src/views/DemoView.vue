<template>
  <div>
    <HeaderComp/>
    <LeftBarComp/>
    <AddUserToGroupModal/>
<UpdateModal> </UpdateModal>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import LeftBarComp from '@/components/LeftBarComp.vue';
import UpdateModal from '@/modals/UpdateModal.vue';
import AddUserToGroupModal from '@/modals/AddUserToGroupModal.vue';
  export default {
    components:{
      UpdateModal,
      LeftBarComp,
      HeaderComp,
      AddUserToGroupModal
    },
data() {
  return {
  }
},
methods: {

},
  }
</script>

<style lang="scss" scoped>

</style>