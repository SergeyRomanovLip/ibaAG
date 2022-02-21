import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/services/api.service'
import { User } from './../../models/User'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!: User

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.user = this.service.getAuth()
  }
}
