import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  url = 'http://skunkworks.ignitesol.com:8000/books/';
  constructor(private http: HttpClient) { }

  getBooks(search, book, pageNumber){
    if(book != null) {
      let bookName = book.toLowerCase();
      return <any>this.http.get(this.url+`/?topic=${bookName}`);
    } else if(search !=null){
      return <any>this.http.get(this.url+`/?search=${search}`);
    } else {
      return <any>this.http.get(this.url+`/?page=${pageNumber}`);
    }
  }
}
