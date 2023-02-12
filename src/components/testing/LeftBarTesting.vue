<template>
  <div>
    <div class="d-flex flex-column overflow-auto " v-for="group in Object.keys(groups)">
      <div class="list-group p-2">
        <a class="list-group-item" @click="fetchMessages(groups[group].id)">{{ groups[group].groupName }}</a>
  </div>
  </div>
</div>
</template>

<!-- <script src="./js/leftBarComp.js"> -->
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      groupid:'0'
    }
  },
computed: {
...mapGetters(['groups']),
user() {
return JSON.parse(localStorage.getItem("userData"));
},
},
mounted() {
this.fetchGroups(this.user.userid);
},
methods: {
...mapActions(['getMessages']),
...mapActions(['fetchGroups','setSelectedGroup']),

async fetchMessages(groupId) {
  try {
    await this.getMessages({
      groupId,
      userId: this.user.userid,
    });
    localStorage.setItem('groupId', JSON.stringify(groupId))
    
    this.setSelectedGroup(groupId)
  } catch (error) {
    console.error(error);
  }
},
},
}
</script>