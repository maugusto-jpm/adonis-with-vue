export interface User {
  name: string | null;
}

export interface StateData {
  user: null | User;
}

export default {
  user: null,
} as StateData;
