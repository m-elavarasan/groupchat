import toastMixin from "@/mixins/toastMixin";
import userAuth from "@/apiservice/userAuth";
export default {
  components:{
  },
  mixins:[toastMixin],
  data() {
    return {
      userData: {},
      boxOne: ''
    };
  },
  methods: {
    handleLogout() {
      this.displayConfirmation("Confirm to Logout", "danger")
        .then((response) => {
          if (response) {
          userAuth.handleLogout({success:()=>{console.log("Sign Out Successfull");},fail:(err)=>{console.error(err);}});    }
        })
        .catch((error) => {
          console.error(error); // handle error
        });    
    // let text = "Are you sure to Sign Out \n Either Sign Out or Cancel.";
      // if (confirm(text) == true) {
      // userAuth.handleLogout({success:()=>{console.log("Sign Out Successfull");},fail:(err)=>{console.error(err);}});
      // }
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