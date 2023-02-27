<template>
  <div>
    <b-modal id="edit-contact-modal" ref="modal" title="Edit Contact" @ok="handleOk">
      <b-form-group label="Useer ID" label-for="user-id" @submit.stop.prevent="handleSubmit">
        <b-form-select v-model="userid" key="contacts-select">
          <option v-for="contact in contacts" :key="contact.phone" :value="contact.id">{{ contact.id }}</option>
        </b-form-select>
      </b-form-group>
      <b-form-group label="Phone" label-for="phone">
        <b-form-input id="phone"  v-model="phone" required></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import userContact from '@/apiservice/userContact';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      phone:'',
      userid:'',
    }
  },
  computed: {
    ...mapGetters(['contacts'])
  },
  mounted() {
  },
  methods: {
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
     async handleSubmit()
      {
        this.$nextTick(() => {
        this.$bvModal.hide('create-contact-modal')
      })
      try {
        const response = await userContact.editContact(this.userid,this.phone)
        alert('Contact '+ this.phone  +' Edited')
      } catch (error) {
        console.error(error)
      }
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>