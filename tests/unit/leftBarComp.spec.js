import { shallowMount } from "@vue/test-utils";
import LeftBar from "@/components/LeftBarComp.vue";

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(LeftBar, {
    mocks:{
    $store: {
      dispatch: jest.fn(),
    }
  },
    data() {
      return {
        groups: [
          {
            groupid: 1,
            groupname: "TEST 1",
          },
          {
            groupid: 2,
            groupname: "TEST 2",
          },
          {
            groupid: 3,
            groupname: "TEST 3",
          },
          {
            groupid: 4,
            groupname: "TEST 4",
          },
        ],
        selectedGroup: 1,
      };
    },
  });
});
it("Emit Fetech Message", () => {
    wrapper.vm.$emit("fetchmsg", selectedGroup);
    expect(wrapper.emitted("fetchmsg")).toBeCalledWith(selectedGroup);
  });
it("Emit Fetech Fetch Groups", () => {
  expect(wrapper.vm.fetchGroups()).toBeCalledWith({
    mobile: 1,
    success: expect.any(Function),
    fail: expect.any(Function),
  });
});
