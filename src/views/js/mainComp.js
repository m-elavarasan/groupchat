
import HeaderComp from '@/components/HeaderComp.vue'
import LeftBarComp from '@/components/LeftBarComp.vue'
import MessageComp from '@/components/MessageComp.vue'
import UpdateModal from '@/modals/UpdateModal.vue';
import CreateGroupModal from '@/modals/CreateGroupModal.vue'
import ListContactModal from '@/modals/ListContactModal.vue'
import CreateContactModal from '@/modals/CreateContactModal.vue'
import ListGroupsModal from '@/modals/ListGroupsModal.vue';
import EditContactModal from '@/modals/EditContactModal.vue';

import { mapActions } from "vuex";

  export default {
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
        isLoading:false,
        isShowModal:false,
        currentPage:1,
        totalPage:1,
      }
    },
    computed: {
      user(){
        return JSON.parse(localStorage.getItem("userData"));
      },
    },
    mounted() {
      this.$store.dispatch("fetchContacts",{
        success: (res)=>{
        console.log("msg fetch success");
      },
      fail:(res)=>{
        console.log("Error in fetch Message");
      }
    })
    },
    methods: {
      fetchmsg(groupId){
        console.log('Emit works ' + groupId +' '+ this.user.userid);
        this.$store.dispatch("FETCHALLMSG", {
          data: {
            groupid: groupId,
            userid: this.user.userid,
          },
          success: (res)=>{
            console.log("msg fetch success");
          },
          fail:(res)=>{
            console.log("Error in fetch Message");
          },
      
        })
      },
      
      handleScroll()
      {
        const container = this.$refs.scrollContainer;
        const containerHeight = container.offsetHeight;
        const contentHeight = container.scrollHeight;
        const scrollPosition = container.scrollTop;
        console.log(containerHeight,scrollPosition,contentHeight, containerHeight+scrollPosition +1)
        console.log(containerHeight + scrollPosition >= contentHeight);
        if (containerHeight + scrollPosition + 1>= contentHeight && !this.isLoading) {      
        console.log("inside if");
        //  this.fetchMessages() 
      }
    },
    //   async fetchMessages() {
    //     console.log('Method Called');
    //     try {
    //       await this.nextFetchMessages();
    //       this.isLoading=false
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   },
    },
  }
