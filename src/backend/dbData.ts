import { Group } from 'src/app/models/Group'
import { User } from 'src/app/models/User'
import { Permission } from './../app/models/Permission'

export const api = {
  groups(): Array<Group> {
    return [
      { title: 'Administrator', permissions: this.permissions([1, 2, 3, 4]) },
      { title: 'User', permissions: this.permissions([1, 3]) },
    ]
  },
  getUsers(): Array<User> {
    return [
      { name: 'admin', email: 'john@doe.com', password: '424242', permissions: this.permissions([1, 2, 3, 4]) },
      { name: 'engineer', email: 'mari@ell.com', password: '696969', permissions: this.permissions([1, 3]) },
    ]
  },
  auth(): User {
    return this.getUsers()[0]
  },
  permissions(args?: Array<string | number>): Array<Permission> {
    const permissions = [
      { id: '1', title: 'View Dashboards' },
      { id: '2', title: 'Edit Dashboards' },
      { id: '3', title: 'Manage Datasource' },
      { id: '4', title: 'Manage Users' },
    ]
    if (!args) return permissions
    return permissions.filter((p) => args.includes(p.id))
  },
}
const colors: any = {
  dark: '#303030',
  lightgray: '#7f7f7f',
  light: '#e5e5e5',
  green: '#007344',
}
