<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color:#28364d;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="@/assets/quinbaylogo.png" width="150vw" height="50vh" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active text-white">
              <a class="nav-link text-light" href="#">{{ user.username }} <span class="sr-only">({{user.about}})</span></a>
            </li>
            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contacts
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Add Contact</a></li>
                <li><a class="dropdown-item" href="#">Edit Contacts</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">View Contacts</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="user-avatar.png" alt="user avatar" class="img-fluid rounded-circle">
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item" href="#">Sign Out</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user:{
      username :'Elavarasan',
      about:'Busy',

    }
  }
},
}
</script>

<style lang="scss" scoped>

</style>