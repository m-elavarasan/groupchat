
import HeaderComp from '@/components/HeaderComp.vue'
import LeftBarComp from '@/components/LeftBarComp.vue'
import MessageComp from '@/components/MessageComp.vue'
import { mapActions } from "vuex";

  export default {
    components:{
      HeaderComp,
      LeftBarComp,
      MessageComp,
    },
    data() {
      return {
        isLoading:false
      }
    },
    methods: {
      ...mapActions(["nextFetchMessages"]),
      handleScroll()
      {
        const container = this.$refs.scrollContainer;
        const containerHeight = container.offsetHeight;
        const contentHeight = container.scrollHeight;
        const scrollPosition = container.scrollTop;
        console.log(containerHeight + scrollPosition >= contentHeight);
        if (containerHeight + scrollPosition + 1>= contentHeight && !this.isLoading) {        this.fetchMessages
         console.log("inside if");
         this.fetchMessages() 
      }
    },
      async fetchMessages() {
        console.log('Method Called');
        try {
          await this.nextFetchMessages();
          this.isLoading=false
        } catch (error) {
          console.error(error);
        }
      },
    },
  }
