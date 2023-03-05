import MainView from "@/views/MainView.vue";
import { shallowMount } from "@vue/test-utils";

describe("MainView", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MainView, {
      mocks: {
        $store: {
          dispatch: jest.fn(),
        },
      },
    });
  });

  it("sets isLoading to true when fetchmsg is called", () => {
    axios.post.mockResolvedValue({ data: {} });
    wrapper.vm.fetchmsg("groupId");
    expect(wrapper.vm.isLoading).toBe(true);
  });

  it("should call the store's FETCHALLMSG action with correct arguments when fetchmsg is called", async () => {
    axios.post.mockResolvedValue({ data: {} });
    await wrapper.vm.fetchmsg("groupId");
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith("FETCHALLMSG", {
      data: {
        groupid: "groupId",
        userid: wrapper.vm.user.userid,
      },
      success: expect.any(Function),
      fail: expect.any(Function),
    });
  });
});
