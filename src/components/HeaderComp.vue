<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color:#28364d;">
      <div class="container-fluid">
        <a class="navbar-brand" href=""><img src="@/assets/quinbaylogo.png" width="150vw" height="50vh" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active text-white">
              <a class="nav-link text-light f-bold">Group Chat</a>
            </li>
            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contacts
                </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Add Contact</a></li>
                <li><a class="dropdown-item" href="#">Edit Contacts</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">View Contacts</a></li>
              </ul>
            </li>
            <a class="nav-link text-info f-bold">About Me: {{userData.about}}</a>
          </ul>
          <div class="form-group p-2">
            <input type="text" class="form-control" placeholder="Search groups">
          </div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-light" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="text-light">{{userData.username}} </span>
                <img src="@/assets/avatar.png" width="40vw" height="40vh" alt="user avatar" class="img-fluid rounded-circle ">
              </a>
              <div class="dropdown-menu" aria-labelledby="userDropdown">
                <a class="dropdown-item"  @click="openUpdateModal(user)">Profile</a>
                
                <a class="dropdown-item" @click="handleLogout">Sign Out</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <update-modal :user="selectedUser" ref="updateModal"></update-modal> -->
  </div>
</template>
<script src="./js/headerComp.js"/>