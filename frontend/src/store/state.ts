export interface User {
  email: string | null;
}

export type StateData = {
  user: null | User;
};

export default {
  user: null,
} as StateData;
