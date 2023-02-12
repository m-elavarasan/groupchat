import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {

      
        };
  },
  computed: {
    ...mapGetters(['groups']),
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("userData"));
    this.fetchGroups(user.userid);
  },
  methods: {
    ...mapActions(['fetchGroups']),
    groupOnClick(id) {
      console.log('Inside Group' + id);
    },
  },
};
