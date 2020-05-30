import { ActionTree } from 'vuex';

import { StateData, User } from './state';

export default {
  async loadUser({ commit }, payload: { user: User }): Promise<User> {
    commit('setUser', payload.user);
    return payload.user;
  },

} as ActionTree<StateData, StateData>;
