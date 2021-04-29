import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  book;
  constructor() { }

  setBookName(clickedBook){
    this.book = clickedBook;
  }

  getBookName(){
    return this.book;
  }
}
