<template>
  <div>
    <div class="d-flex flex-column overflow-auto " v-for="group in Object.keys(groups)">
      <div class="list-group p-2">
        <a class="list-group-item" @click="groupOnClick(groups[group].id)">{{ groups[group].groupName }}</a>
  </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        groups: [{
            "id": 1,
            "groupName": "New Group 1",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:46:25.182+00:00"
          },
          {
            "id": 4,
            "groupName": "New Group 2",
            "createdBy": "1",
            "createdOn": "2023-02-09T11:59:14.718+00:00"
          },
          {
            "id": 5,
            "groupName": "Sample",
            "createdBy": "Elavarasan",
            "createdOn": "2023-02-10T05:01:40.101+00:00"
          },
        ],
      }
    },
  }
</script>