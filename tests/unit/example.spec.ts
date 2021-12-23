import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Products from "@/components/Products.vue";

describe("Products.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Data from Restful API";
    const wrapper = shallowMount(Products, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
