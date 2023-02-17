<template>
  <div> 
     <b-modal ok-title="Create" id="create-group-modal" ref="modal" title="Create Group"
      @ok="handleOk" @cancel="resetModal">

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Created By" label-for="created-by">
          <b-form-input id="createby"  v-model="createdby" disabled required></b-form-input>
        </b-form-group>
        <b-form-group label="Group Name" label-for="group-name">
          <b-form-input id="groupname"  v-model="groupname" required></b-form-input>
        </b-form-group>
        <b-form-group label="Users Id" label-for="user-id">
          <b-form-select v-model="selected" :options="contacts.id"></b-form-select>
          <!-- <b-form-input id="userid"  v-model="userid" required></b-form-input> -->
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import userGroups from '../apiservice/userGroups'
export default {
  data() {
    return {
      selected:null,
      groupname:'',
      createdby:'',
      userid:'',

    }
  },
  computed: {
    ...mapGetters(['userData','contacts']),
    },
    mounted() {
      this.createdby=this.userData.payload.userid,
      this.fetchContacts()
    },
  created() {
    console.log(this.userData.payload.userid);
  },
  methods: {
    ...mapActions(['fetchContacts']),
    resetModal() {
      this.userid='',
      this.createdby = '',
      this.groupname= ''
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    async handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('create-group-modal')
      })
      try{
      await userAuth.handleUpdate(this.userid, this.username,this.about)
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