import { ActionTree } from 'vuex';

import { StateData, User } from './state';
import { loadLoggedUser } from '@/services/UsersService';

export default {
  async loadUser({ commit }): Promise<User> {
    const user = await loadLoggedUser();
    commit('setUser', user);

    return user;
  },
} as ActionTree<StateData, StateData>;
