import { GetterTree } from 'vuex'

import { StateData } from './state'

export default {
  user: state => state.user,
  isLoggedIn: state => !!state.user,
} as GetterTree<StateData, StateData>
