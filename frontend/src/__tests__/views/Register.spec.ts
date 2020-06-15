import { shallowMount } from '@vue/test-utils';

import Register from '@/views/Register.vue';

describe('Register.vue', () => {
  const wrapper = shallowMount(Register, {
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

  test('sends registration information to backend', async () => {
    wrapper.find('.input-email').setValue('user@email.com');
    wrapper.find('.input-password').setValue('123456');
    wrapper.find('.input-confirmation').setValue('123456');

    wrapper.find('.submit').trigger('click');

    expect(wrapper.vm.$axios.post).toBeCalledWith('signup', {
      email: 'user@email.com',
      password: '123456',
      password_confirmation: '123456',
    });
  });
});
