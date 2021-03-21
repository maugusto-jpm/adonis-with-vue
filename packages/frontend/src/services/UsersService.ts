import HttpService from './HttpService'
import { User } from '@/store/state'

export async function loadLoggedUser(): Promise<User> {
  const { data } = await HttpService.get('api/user')
  return data
}
