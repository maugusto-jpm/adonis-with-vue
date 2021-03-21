export interface User {
  email: string
}

export type StateData = {
  user: null | User
};

export default {
  user: null,
} as StateData
