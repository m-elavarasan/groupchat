<template>
  <div>
    <b-modal id="modal-scrollable" ref="modal" scrollable title="List Contact">
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