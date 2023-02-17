<template>
  <div>
      <div> 
           <!-- <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button> -->

           
        <b-modal ok-title="Update" id="user-update-modal" ref="modal" title="Update User"
      @ok="handleOk" @cancel="resetModal">

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="User Id" label-for="userid-input">
          <b-form-input id="userid"  v-model="userid" required disabled></b-form-input>
        </b-form-group>
        <b-form-group label="User Name" label-for="name-input">
          <b-form-input id="username"  v-model="username"  required></b-form-input>
        </b-form-group>
        <b-form-group label="About" label-for="about-input">
          <b-form-input id="about"  v-model="about" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
  </div>
</template>

<script>
import userAuth from '../apiservice/userAuth'
export default {
  data() {
    return {
      userData:{},
      userid:'',
      username: '',
      about:'',
    }
  },
  computed: {
    user(){
      return JSON.parse(localStorage.getItem("userData"));
    }
  },
  created() {
    this.resetModal()
  },
  methods: {
    resetModal() {
      this.userid=this.user.userid,
      this.username = this.user.username,
      this.about= this.user.about
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    async handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('user-update-modal')
      })
      try{
      const userData=await userAuth.handleUpdate(this.userid, this.username,this.about)
      console.log(userData)
      console.log(userData.data)
      localStorage.setItem('userData', JSON.stringify(userData))
      alert("Updated User");
      }
      catch (error) {
        console.error(error)
      }
    }
  }
}
</script>