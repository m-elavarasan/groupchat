<template>
  <div class="message-list" id="scrollId">
    <h1>dsds</h1>

    <div class="message-item" v-for="message in allMessages" :key="message.id">
      {{ message.messagetext }}
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
      allMessages:[{"messageid":11,"senderid":"1","groupid":5,"messagetext":"Hello","timestamp":"2023-02-10T05:51:06.835+00:00","userid":"2"},{"messageid":14,"senderid":"1","groupid":5,"messagetext":"Hello","timestamp":"2023-02-10T05:51:33.304+00:00","userid":"2"},{"messageid":75,"senderid":"2","groupid":5,"messagetext":"Hi","timestamp":"2023-02-12T14:13:06.466+00:00","userid":"2"},{"messageid":78,"senderid":"2","groupid":5,"messagetext":"Demo","timestamp":"2023-02-12T14:15:22.660+00:00","userid":"2"},{"messageid":81,"senderid":"2","groupid":5,"messagetext":"Hello","timestamp":"2023-02-12T14:17:35.742+00:00","userid":"2"},{"messageid":84,"senderid":"2","groupid":5,"messagetext":"test","timestamp":"2023-02-12T14:18:00.752+00:00","userid":"2"},{"messageid":87,"senderid":"2","groupid":5,"messagetext":"testing 1","timestamp":"2023-02-12T14:19:50.230+00:00","userid":"2"},{"messageid":109,"senderid":"2","groupid":5,"messagetext":"Hi","timestamp":"2023-02-13T04:44:16.403+00:00","userid":"2"},{"messageid":115,"senderid":"2","groupid":5,"messagetext":"33","timestamp":"2023-02-13T04:44:54.130+00:00","userid":"2"},{"messageid":118,"senderid":"2","groupid":5,"messagetext":"33","timestamp":"2023-02-13T04:44:58.218+00:00","userid":"2"},{"messageid":166,"senderid":"2","groupid":5,"messagetext":"1234","timestamp":"2023-02-13T04:59:05.329+00:00","userid":"2"},{"messageid":169,"senderid":"2","groupid":5,"messagetext":"211","timestamp":"2023-02-13T04:59:11.536+00:00","userid":"2"},{"messageid":172,"senderid":"2","groupid":5,"messagetext":"21212121","timestamp":"2023-02-13T04:59:16.000+00:00","userid":"2"},{"messageid":175,"senderid":"2","groupid":5,"messagetext":"77272","timestamp":"2023-02-13T04:59:21.370+00:00","userid":"2"},{"messageid":178,"senderid":"2","groupid":5,"messagetext":"heleo","timestamp":"2023-02-13T04:59:26.471+00:00","userid":"2"},{"messageid":181,"senderid":"2","groupid":5,"messagetext":"Hello","timestamp":"2023-02-13T04:59:30.523+00:00","userid":"2"},{"messageid":184,"senderid":"2","groupid":5,"messagetext":"Hello","timestamp":"2023-02-13T04:59:45.290+00:00","userid":"2"},{"messageid":187,"senderid":"2","groupid":5,"messagetext":"123","timestamp":"2023-02-13T04:59:49.775+00:00","userid":"2"},{"messageid":190,"senderid":"2","groupid":5,"messagetext":"Hi","timestamp":"2023-02-13T06:17:52.144+00:00","userid":"2"},{"messageid":193,"senderid":"2","groupid":5,"messagetext":"ho","timestamp":"2023-02-13T06:45:54.111+00:00","userid":"2"},{"messageid":205,"senderid":"2","groupid":5,"messagetext":"ge","timestamp":"2023-02-13T07:00:31.772+00:00","userid":"2"},{"messageid":208,"senderid":"2","groupid":5,"messagetext":"hi","timestamp":"2023-02-13T07:03:16.348+00:00","userid":"2"},{"messageid":219,"senderid":"2","groupid":5,"messagetext":"hi","timestamp":"2023-02-13T13:25:53.814+00:00","userid":"2"},{"messageid":397,"senderid":"1","groupid":5,"messagetext":"Hi","timestamp":"2023-02-16T06:54:54.371+00:00","userid":"2"},{"messageid":433,"senderid":"1","groupid":5,"messagetext":"Testing","timestamp":"2023-02-21T03:43:20.703+00:00","userid":"2"},{"messageid":449,"senderid":"1","groupid":5,"messagetext":"test msg","timestamp":"2023-02-21T12:44:34.429+00:00","userid":"2"},{"messageid":472,"senderid":"1","groupid":5,"messagetext":"Test","timestamp":"2023-02-28T09:31:47.010+00:00","userid":"2"},{"messageid":474,"senderid":"1","groupid":5,"messagetext":"Test","timestamp":"2023-02-28T09:31:51.614+00:00","userid":"2"}],
      // scrollId: `message-list-${Date.now()}`,
    };
  },
  computed: {
    // ...mapGetters(["allMessages"]),
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
