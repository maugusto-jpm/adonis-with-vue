import Axios from 'axios';
import { User } from '@/store/state';

export function loadLoggedUser(): Promise<User> {
  return Axios.get('api/user').then(({ data }) => data);
}
