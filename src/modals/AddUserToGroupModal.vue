<template>
  <div>
    {{ userData  }}
    <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>
        <b-modal ok-title="Create" id="modal-prevent-closing" ref="modal" title="Create Group"
      @ok="handleOk" @cancel="resetModal">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Group Name" label-for="group-name">
          <b-form-input id="groupname"  v-model="groupname" required disabled></b-form-input>
        </b-form-group>
        <b-form-group label="Created By" label-for="created-by">
          <b-form-input id="createby"  v-model="createdby"  required></b-form-input>
        </b-form-group>
        <b-form-group label="Users Id" label-for="user-id">
          <b-form-input id="userid"  v-model="userid" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import userGroups from '../apiservice/userGroups'
export default {
  data() {
    return {
      groupname:'',
      createdby:'',
      userid:'',
    }
  },
  computed: {
    ...mapGetters(["userData"]),
  },
  created() {
    this.resetModal()
  },
  methods: {
    resetModal() {
      console.log(this.userData);
      // this.userid=this.user.userid,
      // this.username = this.user.username,
      // this.about= this.user.about
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    async handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
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