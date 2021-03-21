import { loadLoggedUser } from '@/services/UsersService'
import { ActionTree } from 'vuex'

import { StateData, User } from './state'

export default {
  logout({ commit }): void {
    commit('setUser', null)
  },

  async loadUser({ commit }): Promise<User> {
    console.log('Pegando usuário')

    const user = await loadLoggedUser()
    commit('setUser', user)

    return user
  },
} as ActionTree<StateData, StateData>
