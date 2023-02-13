// import apiService from '@/apiservice/userGroups';

// export default {
//   state: {
//     messages: [],
//   },
//   getters: {
//     messages: state => state.messages
//   },
//   mutations: {
//     setMessage(state, messages) {
//       state.messages = messages;
//     },
//   },
//   actions: {
//     async sendMessage({ commit }, payload) {
//       try {
//         const response = await apiService.sendMessage(payload.groupId, payload.senderId, payload.messageText);
//         console.log(response);
//       } catch (error) {
//         console.error(error);
//       }
//     },
//     async getMessages({ commit }, payload) {
//       try {
//         const response = await apiService.displaySpecific(payload.groupId, payload.userId);
//         commit('setMessage', response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     },
//   },
// };
