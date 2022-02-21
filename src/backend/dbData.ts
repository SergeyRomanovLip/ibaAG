import { User } from 'src/app/models/User'
import { Permission } from './../app/models/Permission'

export const api = {
  getUsers(): Array<User> {
    return [
      { name: 'admin', email: 'john@doe.com', password: '424242', permissions: this.permissions() },
      { name: 'engineer', email: 'mari@ell.com', password: '696969', permissions: this.permissions().filter((p) => (p.id = '1' || '2')) }
    ]
  },
  auth(): User {
    return this.getUsers()[0]
  },
  permissions(): Array<Permission> {
    return [
      { id: '1', title: 'View Dashboards' },
      { id: '2', title: 'Edit Dashboards' },
      { id: '3', title: 'Manage Datasource' },
      { id: '4', title: 'Manage Users' }
    ]
  }
}
const colors: any = {
  dark: '#303030',
  lightgray: '#7f7f7f',
  light: '#e5e5e5',
  green: '#007344'
}
