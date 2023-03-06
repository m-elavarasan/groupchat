import { shallowMount } from "@vue/test-utils";
import MessageCompVue from "@/components/MessageComp.vue";
describe("MessageCompVue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MessageCompVue, {
      mocks: {
        groups: 1,
      },
    });
  });

  it("sendMessage is called", () => {
    wrapper.vm.sendMessage();
    wrapper.vm.$emit("fetchmsg", groups);
    expect(wrapper.emitted("fetchmsg")).toBeCalledWith(selectedGroup);

          });
});