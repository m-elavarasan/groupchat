<template>
<div v-if="isLoading">
    <div class="loader d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <b-spinner type="grow"  variant="primary"></b-spinner>
    </div>
    </div>
  <div v-else>
          <div class="d-flex flex-column align-items-center mt-5">
        <h2 class="text-primary mb-5">Welcome to ChatApp</h2>
        <form class="w-50 p-3 bg-light border border-primary rounded" @submit.prevent="submitLogin">
          <div class="form-group">
            <label for="mobile">Mobile</label>
            <input type="text" class="form-control" id="mobile" v-model="mobile">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="password">
          </div>
          <button :disabled="isLoading" type="submit" class="btn btn-primary w-100 mt-3">Submit</button>
        </form>
        <p v-if="errorMsgVisible" class="color-danger" >{{errMsg}}</p>
      </div>
  </div>
</template>

<script src="./js/homeView.js"></script>
