import { mount } from "@vue/test-utils";
import HeaderCompVue from "@/components/HeaderComp.vue";

let wrapper;
beforeEach(() => {
  wrapper = mount(HeaderCompVue, {
    mocks: {
    },
  });
});
describe("HeaderCompVue", () => {
  test("Handle Logout Test",()=>{
    wrapper.vm.handleLogout()
     expect(wrapper.vm.handleLogout).toBeCalled("displayConfirmation")
      });  
    });
