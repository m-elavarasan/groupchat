<template>
  <div>
    <b-modal ok-title="Create" id="create-contact-modal" ref="modal" title="Create Contact" @ok="handleOk">
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group label="Phone" label-for="Phone">
        <b-form-input id="phone"  v-model="phone" required></b-form-input>
      </b-form-group>
    </form>
  </b-modal>
  </div>
</template>

<script>
import userContact from '@/apiservice/userContact'
  export default {
    data() {
      return {
        phone:''
      }
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
        const response = await userContact.createContact(this.phone)
        alert('Contact '+ this.phone  +' Created')
      } catch (error) {
        console.error(error)
      }
    },
    },
  }
</script>

<style lang="scss" scoped>

</style>