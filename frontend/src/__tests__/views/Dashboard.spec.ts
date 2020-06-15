import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';

import Dashboard from '@/views/Dashboard.vue';
import store from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

store.commit('setUser', {
  email: 'user@email.com',
});

describe('Dashboard.vue', () => {
  const wrapper = mount(Dashboard, {
    store,
    localVue,
  });

  test('renders component correctly', () => {
    expect(wrapper.text()).toMatch('Welcome, user@email.com');
  });
});
