<template>
  <div class="message-container" ref="messageContainer">
    <div v-for="message in messages" :key="message.messageid">
      <div>{{ message.messagetext }}</div>
      <div>{{ message.timestamp }}</div>
    </div>
    <div v-if="!loading && hasMore">
      {{ loadMoreMessage }}
    </div>
    <div v-if="loading">
      Loading...
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
export default {
  computed: {
    messages() {
      return this.$store.getters.messages;
    },
    hasMore() {
      return this.$store.getters.hasMore;
    }
  },
  mounted() {
    this.$refs.messageContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$refs.messageContainer.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (
        this.$refs.messageContainer.scrollTop +
          this.$refs.messageContainer.clientHeight >=
        this.$refs.messageContainer.scrollHeight
      ) {
        this.loadMoreMessage();
      }
    },
    loadMoreMessage() {
      this.$store.dispatch("loadMoreMessage");
    }
  }
};
</script>

<style>
.message-container {
  height: 500px;
  overflow-y: scroll;
}
</style>