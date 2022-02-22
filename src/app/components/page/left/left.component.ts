import { Component, OnInit } from '@angular/core'
import { Group } from 'src/app/models/Group'
import { User } from 'src/app/models/User'
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
})
export class LeftComponent implements OnInit {
  users!: Array<User>
  groups!: Array<Group>
  collapsedUsers!: boolean
  collapsedGroups!: boolean

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.groups = this.service.getGroups()
    this.users = this.service.getUsers()
    this.collapsedUsers = false
    this.collapsedGroups = false
  }

  public switchCollapsed(type: 'users' | 'groups'): void {
    type === 'users' ? (this.collapsedUsers = !this.collapsedUsers) : (this.collapsedGroups = !this.collapsedGroups)
    console.log(this.collapsedUsers)
    console.log(this.collapsedGroups)
  }
}
