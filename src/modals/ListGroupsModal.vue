<template>
  <div>
    <b-modal id="modal-scrollable-list-group" ref="modal" scrollable title="List Group">
      <ul v-for="group in Object.keys(groups)">
        <div class="list-group">
          <a class="list-group-item">{{ groups[group].groupName }}</a>
        </div>
          </ul>
  </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['groups'])
  },
  }
</script>

<style lang="scss" scoped>

</style>