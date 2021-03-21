import { shallowMount } from '@vue/test-utils'

import Register from '@/views/Register.vue'

jest.mock('@/services/HttpService')
import HttpService from '@/services/HttpService'
const HttpServiceMocked = HttpService as jest.Mocked<typeof HttpService>

describe('Register.vue', () => {

  test('sends registration information to backend', async () => {
    const wrapper = shallowMount(Register, {
      mocks: {
        $store: {
          commit: jest.fn(),
        },
        $router: {
          push: jest.fn(),
        },
      },
    })

    HttpServiceMocked.post.mockResolvedValue({ email: 'email@provider.com' })
    wrapper.find('.input-email').setValue('user@email.com')
    wrapper.find('.input-password').setValue('123456')
    wrapper.find('.input-confirmation').setValue('123456')

    wrapper.find('.submit').trigger('click')

    expect(HttpServiceMocked.post).toBeCalledWith('signup', {
      email: 'user@email.com',
      password: '123456',
      passwordConfirmation: '123456',
    })
  })
})
