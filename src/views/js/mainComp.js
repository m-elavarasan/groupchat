
import HeaderComp from '@/components/HeaderComp.vue'
import LeftBarComp from '@/components/LeftBarComp.vue'
import MessageComp from '@/components/MessageComp.vue'
import UpdateModal from '@/modals/UpdateModal.vue';
import CreateGroupModal from '@/modals/CreateGroupModal.vue'
import ListContactModal from '@/modals/ListContactModal.vue'
import CreateContactModal from '@/modals/CreateContactModal.vue'
import ListGroupsModal from '@/modals/ListGroupsModal.vue';
import EditContactModal from '@/modals/EditContactModal.vue';

  export default {
    name: 'MainView',
    components:{
      HeaderComp,
      LeftBarComp,
      MessageComp,
      UpdateModal,
      ListContactModal,
      CreateGroupModal,
      CreateContactModal,
      ListGroupsModal,
      EditContactModal,
    },
    data() {
      return {
        isShowModal:false,
        currentPage:1,
        totalPage:1,
        isLoading: false, 
        isLoadingLocal:true
      }
    },
    computed: {
      user(){
        return JSON.parse(localStorage.getItem("userData"));
      },
    },
    mounted() {
      this.isLoadingLocal=true,
    // const user = localStorage.getItem('userData');
    // if (user) {
    // }
      this.$store.dispatch("UPDAT_LOCAL_DATA", this.user)
      this.$store.dispatch("fetchContacts",{
        success: (res)=>{
        this.isLoadingLocal=false

      },
      fail:(res)=>{
        this.isLoadingLocal=false
        console.log("Error in fetch Message");
      }
    })
    },
    methods: {
      fetchmsg(groupId){
        this.isLoading=true
        console.log('Emit works ' + groupId +' '+ this.user.userid);
        this.$store.dispatch("FETCHALLMSG", {
          data: {
            groupid: groupId,
            userid: this.user.userid,
          },
          success: (res)=>{
            
            this.isLoading=false
          },
          fail:(res)=>{
            this.isLoading=false
          },
      
        })
      },
      
      handleScroll()
      {
        const container = this.$refs.scrollContainer;

        // const containerHeight = container.offsetHeight;
        // const contentHeight = container.scrollHeight;
        // const scrollPosition = container.scrollTop;
        // console.log(containerHeight,scrollPosition,contentHeight, containerHeight+scrollPosition +1)
        // console.log(containerHeight + scrollPosition >= contentHeight);
        // if (containerHeight + scrollPosition + 1>= contentHeight && !this.isLoading) {      
        //  this.fetchMessages() 
      // }
    },

    },
  }
