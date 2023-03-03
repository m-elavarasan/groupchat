<template>
  <div>
    <b-modal id="modal-scrollable-list-group" ref="modal" scrollable title="List Group" hide-footer>
      <ul v-for="group in Object.keys(groups)">
        <div class="list-group">
          <a class="list-group-item" @click="getGroupMessage(groups[group].id)">{{ groups[group].groupName }}</a>
        </div>
      </ul>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import fetchMessage from '@/mixins/fetchMessage'
export default {
  mixins: [fetchMessage],
  computed: {
    ...mapGetters(["groups"]),

  },
  methods: {
    getGroupMessage(groupId) {
      this.$emit('fetchmsg', groupId)
      this.$refs.modal.hide()
      localStorage.setItem('groupId', JSON.stringify(groupId))
    },
  }
}
</script>

<style lang="scss" scoped></style>