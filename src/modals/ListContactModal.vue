<template>
  <div>
    <b-modal id="modal-scrollable" ref="modal" scrollable title="List Contact" hide-footer>
      <ul v-for="contact in Object.keys(contacts)">
        <div class="list-group">
          <a class="list-group-item">{{ contacts[contact].mobilenum }}</a>
        </div>
      </ul>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['contacts'])
  },
  mounted() {
  },
  methods: {
    ...mapActions(['fetchContacts']),

  },
}
</script>

<style lang="scss" scoped></style>