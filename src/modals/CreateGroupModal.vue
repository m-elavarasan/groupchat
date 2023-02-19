<template>
  <div>
    <b-modal ok-title="Create" id="create-group-modal" ref="modal" title="Create Group" @ok="handleOk"
      @cancel="resetModal">

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Created By" label-for="created-by">
          <b-form-input id="createby" v-model="createdby" disabled required></b-form-input>
        </b-form-group>
        <b-form-group label="Group Name" label-for="group-name">
          <b-form-input id="groupname" v-model="groupname" required></b-form-input>
        </b-form-group>
        <b-form-group label="Add Users" label-for="user-id">
          <b-form-select v-model="userid" key="contacts-select">
            <option v-for="contact in contacts" :key="contact.id" :value="contact.id">{{ contact.mobilenum }}</option>
          </b-form-select>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import userGroups from '../apiservice/userGroups'
export default {
  data() {
    return {
      groupname: '',
      createdby: '',
      userid: null,
    }
  },
  computed: {
    ...mapGetters(['userData', 'contacts']),
  },
  mounted() {
    this.createdby = this.userData.payload.userid,
      this.fetchContacts()
  },
  created() {

  },
  methods: {
    ...mapActions(['fetchContacts','fetchGroups']),
    resetModal() {
      this.userid = '',
        this.createdby = '',
        this.groupname = ''
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    async handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('create-group-modal')
      })
      try {
        const response = await userGroups.createGroup(this.groupname, this.createdby, this.selectedMembers)
        console.log('Group '+ this.groupname+ ' Created')
        this.fetchGroups(this.createdby);
      } catch (error) {
        console.error(error)
      }
    },
  }
}
</script>