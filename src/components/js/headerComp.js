import userAuth from '@/apiservice/userAuth'
export default {
  components:{

  },
  data() {
    return {
      userData: {},
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
    // openModalUpdate()
    // {
    //   this.showUpdate=true
    // },
    // openUpdateModal() {
    //   this.selectedUser = this.userData;
    //   this.$refs.updateModal.open();
    // },
  },
  mounted() {
    this.userData = JSON.parse(localStorage.getItem('userData')) || {};
  }
};