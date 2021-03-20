import { shallowMount } from '@vue/test-utils';

import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  const wrapper = shallowMount(Home);

  test('renders component correctly', () => {
    expect(wrapper.text()).toMatch('AdonisJs with Vue.js');
  });
});
