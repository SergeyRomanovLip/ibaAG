import { Injectable } from '@angular/core'
type input = {
  id: string
  value: string
}
let inputState: Array<input> = [{ id: 'ds', value: '' }]

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  writeIn(value: string, id: string): void {
    if (inputState.some((e) => e.id === id)) inputState = inputState.map((el) => (el.id === id ? { id, value } : el))
    else inputState.push({ value, id })
  }
  readOut(id: string) {
    return inputState[inputState.map((e) => e.id).indexOf(id)]
  }
}
