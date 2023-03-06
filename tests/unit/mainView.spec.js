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
    wrapper.vm.fetchmsg();
    expect(wrapper.vm.isLoading).toBe(true);
  });

  it("should call the store's FETCHALLMSG action with correct arguments when fetchmsg is called", () => {
     wrapper.fetchmsg()
    expect(wrapper.vm.$store.dispatch).toBeCalled() 
   });
});
