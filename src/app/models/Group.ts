import { Permission } from './Permission'

export interface Group {
  title: string
  permissions: Array<Permission>
}
