<template>
  <div>
    <div>
      <b-modal ok-title="Update" id="user-update-modal" ref="modal" title="Update User" @ok="handleOk"
        @cancel="resetModal">

        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group label="User Id" label-for="userid-input">
            <b-form-input id="userid" v-model="userid" required disabled></b-form-input>
          </b-form-group>
          <b-form-group label="User Name" label-for="name-input">
            <b-form-input id="username" v-model="username" required></b-form-input>
          </b-form-group>
          <b-form-group label="About" label-for="about-input">
            <b-form-input id="about" v-model="about" required></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      userData: {},
      userid: '',
      username: '',
      about: '',
    }
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("userData"));
    }
  },
  created() {
    this.resetModal()
  },
  methods: {
    ...mapActions(['setUserData']),
    resetModal() {
      this.userid = this.user.userid,
        this.username = this.user.username,
        this.about = this.user.about
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    async handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('user-update-modal')
      })
      this.$store.dispatch("UPDATE_USER", {
        success: this.onSuccess,
        fail: this.onFail,
        data: {
          userid: this.userid,
          username: this.username,
          about: this.about
        },
      });
    },
    onSuccess(data) {
    },
    onFail(err) {
      console.log(err);
    },
  }
}
</script>