<template>
  <div>
    <b-modal id="edit-contact-modal" ref="modal" title="Edit Contact" @ok="handleOk">
      <b-form-group label="Useer ID" label-for="user-id" @submit.stop.prevent="handleSubmit">
        <b-form-select v-model="userid" key="contacts-select">
          <option v-for="contact in contacts" :key="contact.phone" :value="contact.id">{{ contact.id }}</option>
        </b-form-select>
      </b-form-group>
      <b-form-group label="Phone" label-for="phone">
        <b-form-input id="phone" v-model="phone" required></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import userContact from '@/apiservice/userContact';
import toastMixin from '@/mixins/toastMixin';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      phone: '',
      userid: '',
    }
  },
  mixins: [toastMixin],
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
    handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('edit-contact-modal')
      })
      userContact.editContact(this.userid, this.phone, {
        success: (res) => {
          this.displayErrorMessage("Success", "Contact " + (this.phone) + ' Edited', "success")
          this.phone = ''
        },
        fail: (err) => {
          console.log(err)
          this.displayErrorMessage(err.message, "Contact " + (this.phone) + ' Not Edited', "danger")
          this.phone = ''
        },
      });
    },
  },
}
</script>

<style lang="scss" scoped></style>