import { shallowMount } from '@vue/test-utils';

import Login from '@/views/Login.vue';

describe('Login.vue', () => {
  const wrapper = shallowMount(Login, {
    mocks: {
      $axios: {
        post: jest.fn(() => Promise.resolve()),
      },
      $store: {
        dispatch: jest.fn(),
      },
      $router: {
        push: jest.fn(),
      },
    },
  });

  test('sends login information to backend', async () => {
    wrapper.find('.input-email').setValue('user@email.com');
    wrapper.find('.input-password').setValue('123456');

    wrapper.find('.submit').trigger('click');

    expect(wrapper.vm.$axios.post).toBeCalledWith('login', {
      email: 'user@email.com',
      password: '123456',
    });
  });
});
