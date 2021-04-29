import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-bookdashboard',
  templateUrl: './bookdashboard.component.html',
  styleUrls: ['./bookdashboard.component.scss'],
})
export class BookdashboardComponent implements OnInit {

  booksList;
  constructor(
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  books = [
    {
      id: 1,
      name: 'FICTION',
    },
    {
      id: 2,
      name: 'DRAMA',
    },
    {
      id: 3,
      name: 'HUMOR',
    },
    {
      id: 4,
      name: 'POLITICS',
    },
    {
      id: 5,
      name: 'PHILOSOPHY',
    },
    {
      id: 6,
      name: 'HISTORY',
    },
    {
      id: 7,
      name: 'ADVENTURE',
    },
  ];

  identify(index, item) {
    return item.id;
  }

  onBookClicked(book: any) {
    console.log(book);
    this.router.navigate(['/booklist']);
    this.sharedService.setBookName(book);
  }
}
