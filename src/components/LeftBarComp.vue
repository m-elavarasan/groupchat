<template>
  <div>
    <div class="form-group p-2">
      <input type="text" class="form-control" placeholder="Search groups" v-model="searchQuery">
    </div>
    <div v-for="group in filteredGroups">
      <div :class="{ 'list-group p-2': true, 'active': selectedGroup === group.id }">
        <a @click="getGroupMessage(group.id)" class="list-group-item">{{ group.groupName }}</a>
      </div>
    </div>

  </div>
</template>
<script src="./js/leftBarComp.js"/>
<style>
.list-group.active {
  background-color: #60afff;
}
</style>