import userAuth from '@/apiservice/userAuth'
// import UpdateModal from '@/modals/UpdateModal.vue'
export default {
  components:{
    // UpdateModal, 
   },
  data() {
    return {
      userData: {},
      selectedUser: {},
    };
  },
  methods: {
    async handleLogout() {
      try {
        await userAuth.handleLogout();
      } catch (error) {
        console.error(error);
      }
    },
    // openUpdateModal() {
    //   this.selectedUser = this.userData;
    //   this.$refs.updateModal.open();
    // },
  },
  mounted() {
    this.userData = JSON.parse(localStorage.getItem('userData')) || {};
  }
};