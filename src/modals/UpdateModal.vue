<template>
  <div class="modal" v-if="showModal" @click="closeModal">
    <div class="modal-dialog" @click.stop>
      <div class="modal-header">
        <h5 class="modal-title">Update User</h5>
        <button type="button" class="close" @click="closeModal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" />
          </div>
          <div class="form-group">
            <label for="about">About</label>
            <textarea class="form-control" id="about" v-model="about"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
        <button type="button" class="btn btn-primary" @click="updateUser">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      username: this.user.username,
      about: this.user.about,
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    updateUser() {
      // Perform update operation here, for example:
      // axios.put(`/api/users/${this.user.id}`, { username: this.username, about: this.about })
      //   .then(response => {
      //     // Update successful, do something
      //   })
      //   .catch(error => {
      //     // Handle error
      //   });
    }
  },
};
</script>
