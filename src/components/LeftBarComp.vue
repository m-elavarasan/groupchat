<template>
  <div>
    <div class="form-group p-2">
      <input type="text" class="form-control" placeholder="Search groups" v-model="searchQuery">
    </div>
    <div class="d-flex flex-column overflow-auto " v-for="group in filteredGroups">
      <div class="list-group p-2">
        <a class="list-group-item" @click="getGroupMessage(group.id)">{{ group.groupName }}</a>
        <!-- <a class="list-group-item" @click="$emit('fetchmsg')">{{ group.groupName }}</a> -->

      </div>
    </div>
  </div>
</template>
<script src="./js/leftBarComp.js">
