<template>
  <div>
    <div class="d-flex flex-column overflow-auto " v-for="group in Object.keys(groups)">
      <div class="list-group p-2">
        <a class="list-group-item" @click="groupOnClick(groups[group].id)">{{ groups[group].groupName }}</a>
  </div>
  </div>
</div>
</template>

<script src="./js/leftBarComp.js"></script>