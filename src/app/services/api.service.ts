import { Injectable } from '@angular/core'
import { User } from 'src/app/models/User'
import { api } from 'src/backend/dbData'
import { Group } from '../models/Group'
import { Permission } from '../models/Permission'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  getAuth(): User {
    return api.auth()
  }
  getUsers(): Array<User> {
    return api.getUsers()
  }
  getPermissions(): Array<Permission> {
    return api.permissions()
  }
  getGroups(): Array<Group> {
    return api.groups()
  }
}
