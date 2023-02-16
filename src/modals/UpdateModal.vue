<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>
    <b-modal ok-title="Update" id="modal-prevent-closing" ref="modal" title="Update User"
      @ok="handleOk">

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
</template>

<script>
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
      this.userid=this.user.userid,
      this.username = this.user.username,
      this.about= this.user.about
  },
  methods: {
    resetModal() {
      // this.userid='',
      // this.username = '',
      // this.about=''
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
      console.log(this.userid,this.username,this.about);
    }
  }
}
</script>