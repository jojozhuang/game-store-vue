import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";

describe("ProductList.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Data from Restful API";
    const wrapper = shallowMount(ProductList, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
