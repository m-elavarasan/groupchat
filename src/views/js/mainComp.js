
import HeaderComp from '@/components/HeaderComp.vue'
import LeftBarComp from '@/components/LeftBarComp.vue'
import MessageComp from '@/components/MessageComp.vue'
import UpdateModal from '@/modals/UpdateModal.vue';
import CreateGroupModal from '@/modals/CreateGroupModal.vue'
import ListContactModal from '@/modals/ListContactModal.vue'
import CreateContactModal from '@/modals/CreateContactModal.vue'
import ListGroupsModal from '@/modals/ListGroupsModal.vue';
import EditContactModal from '@/modals/EditContactModal.vue';
import fetchMessage from '@/mixins/fetchMessage'

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
        isShowModal:false
      }
    },
    mixins:[fetchMessage],
    computed: {
      // user() {
      //   return JSON.parse(localStorage.getItem("userData"));
      // },
      // id() {
      //   return JSON.parse(localStorage.getItem("groupId"))
      // },
    },
    methods: {
      ...mapActions(["GETALLMESSAGE"]),
      handleScroll()
      {
        this.getGroupMessage()
        console.log("inside Emit");
        // const container = this.$refs.scrollContainer;
        // const containerHeight = container.offsetHeight;
        // const contentHeight = container.scrollHeight;
        // const scrollPosition = container.scrollTop;
        // console.log(containerHeight,scrollPosition,contentHeight, containerHeight+scrollPosition +1)
        // console.log(containerHeight + scrollPosition >= contentHeight);
      //   if (containerHeight + scrollPosition + 1>= contentHeight && !this.isLoading) {
          
    
      // }
    },
      //  async fetchMessages() {
      //   console.log('Method Called');
      //     try{
      //     await this.GETALLMESSAGE()
      //     this.isLoading=false
      //   } catch (error) {
      //     console.error(error);
      //   }
      // },
    },
  }
