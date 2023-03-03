import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeView, {
      mocks: {
        $store: {
          dispatch: jest.fn(),
        },
        $router: {
          push: jest.fn(),
        },
      },
    });
  });

  it("sets isLoading to true when submitLogin is called", () => {
    wrapper.vm.submitLogin()
    expect(wrapper.vm.isLoading).toBe(true);
  });
  it("navigates to home page on successful login",() => {
    const userData = {"mobilenum":"123","about":"Working on Modal","updatedtimestamp":"2023-03-02T14:43:50.914","loginstatus":true,"userid":1,"username":"Elavarasan M","timestamp":"2023-02-09T10:50:37.795"};
    wrapper.vm.onSuccess(userData);
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: "home" })
  })
})