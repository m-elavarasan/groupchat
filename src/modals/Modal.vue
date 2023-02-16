<template>
  <div>
    <button @click="showModal = true">Show User Data </button>
    <modal v-if="showModal" @close="showModal = false">
      <h1>User Data</h1>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Age: {{ user.age }}</p>
      <p>Location: {{ user.location }}</p>
      <button @click="showModal = false"> Close </button>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      user: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 30,
        location: 'New York, NY'
      }
    }
  }
}
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 50%;
  height: 50%;
  overflow: auto;
}
</style>
