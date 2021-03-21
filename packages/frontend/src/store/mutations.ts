import { MutationTree } from 'vuex'

import { StateData, User } from './state'

export default {
  setUser(state, user: User): void {
    state.user = user
  },
} as MutationTree<StateData>
