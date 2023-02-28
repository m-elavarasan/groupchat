<template>
  <div class="message-list" :id="scrollId">
    <h1>dsds</h1>

    <div class="message-item" v-for="message in reversedMessages" :key="message.id">
      {{ message.text }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {

  },
  data() {
    return {
      scrollId: `message-list-${Date.now()}`,
    };
  },
  computed: {
    ...mapGetters(["allMessages"]),
    reversedMessages() {
      return this.allMessages.slice().reverse();
    },
  },
  methods: {
    scrollToEnd() {
      const el = document.getElementById(this.scrollId);
      el.scrollTop = el.scrollHeight;
    },
  },
    mounted() {
  this.$nextTick(() => {
    const msgContainer = document.getElementById('scrollId');
    msgContainer.scrollTop = msgContainer.scrollHeight;
  });
}
}
</script>

<style scoped>
.message-list {
  height: 300px;
  overflow-y: scroll;
}

.message-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
</style>
