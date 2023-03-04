<template>
  <div>
    <b-modal ok-title="Create" id="create-contact-modal" ref="modal" title="Create Contact" @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Phone" label-for="Phone">
          <b-form-input id="phone" v-model="phone" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import userContact from '@/apiservice/userContact'
import toastMixin from '@/mixins/toastMixin'
export default {
  data() {
    return {
      phone: ''
    }
  },
  mixins: [toastMixin],
  methods: {
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault()
      this.handleSubmit()
    },
    handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('create-contact-modal')
      })
      userContact.createContact(this.phone, {
        success: (res) => {
          this.displayErrorMessage("Success", "Contact " + (this.phone) + ' Created', "success");
        },
        fail: (err) => {
          this.displayErrorMessage(err, "Contact " + (this.phone) + ' Not Created', "danger");
        },
      });
    },
  },
}
</script>

<style lang="scss" scoped></style>