// import { shallowMount } from "@vue/test-utils";
// import MainView from "@/views/MainView.vue";
// import userAuth from "@/apiservice/userAuth";
// describe("MainView", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallowMount(MainView, {
//       mocks: {
//         $store: {
//           dispatch: jest.fn(),
//         },
//       },
//     });
//   });

//   it("should call the store's FETCHALLMSG action with correct arguments when fetchmsg is called", () => {
//     const groupId = "1"
//     const userId="1"
//     wrapper.vm.fetchmsg(groupId);
//     expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith("FETCHALLMSG", {
//       data: {
//         groupid: groupId,
//         userid: userId,
//       },
//       success: expect.any(Function),
//       fail: expect.any(Function),
//     });
//   });
// });
