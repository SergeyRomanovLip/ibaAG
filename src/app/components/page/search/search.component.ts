import { Component, OnInit } from '@angular/core'
import { SearchService } from 'src/app/services/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  writeIn: (value: string, id: string) => void

  constructor(private service: SearchService) {
    this.writeIn = this.service.writeIn
  }
  ngOnInit(): void {}
}
