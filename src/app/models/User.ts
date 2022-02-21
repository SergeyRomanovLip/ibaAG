import { Permission } from './Permission'

export interface User {
  name: string
  email: string
  password: string
  permissions: Array<Permission>
}
