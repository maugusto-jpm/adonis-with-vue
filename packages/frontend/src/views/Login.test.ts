import { shallowMount } from '@vue/test-utils'

import Login from '@/views/Login.vue'

jest.mock('@/services/HttpService')
import HttpService from '@/services/HttpService'
const HttpServiceMocked = HttpService as jest.Mocked<typeof HttpService>

describe('Login.vue', () => {
  test('sends login information to backend', async () => {
    const wrapper = shallowMount(Login, {
      mocks: {
        $store: {
          commit: jest.fn(),
        },
        $route: {
          query: {},
        },
        $router: {
          push: jest.fn(),
        },
      },
    })

    HttpServiceMocked.post.mockResolvedValue({ email: 'email@provider.com' })

    wrapper.find('.input-email').setValue('user@email.com')
    wrapper.find('.input-password').setValue('123456')
    wrapper.find('.submit').trigger('click')

    expect(HttpServiceMocked.post).toBeCalledWith('login', {
      email: 'user@email.com',
      password: '123456',
    })
  })
})
