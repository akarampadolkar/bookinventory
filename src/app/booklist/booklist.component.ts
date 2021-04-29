import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { InventoryService } from '../inventory.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit, OnDestroy {
  bookName;
  booksList;
  bookSub: Subscription;
  searchSub: Subscription;
  p: number = 1;
  page = 1;
  totalCount: number;
  maxSize = 5;
  pageSize = 32;
  @ViewChild('element') ele: ElementRef;
  imgUrl ='../../../assets/images/download.jfif';
  constructor(
    private router: Router,
    private sharedService: SharedService,
    private inventoryService: InventoryService,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.bookName = this.sharedService.getBookName();
    if (this.bookName.name) {
      this.loadResult(null, this.bookName.name, null);
    }
  }

  loadResult(search: any, book: string, pageNumber: number) {
    this.loader.start();
    this.bookSub = this.inventoryService
      .getBooks(search, book, pageNumber)
      .subscribe(
        (res) => {
          this.totalCount = res.count;
          this.loader.stop();
          this.booksList = res.results;
        },
        (err) => {
          console.log('Error', err);
        },
        () => {}
      );
  }

  goBackToDashboard() {
    this.router.navigate(['/']);
  }

  pageChangeEvent(event) {
    this.loadResult(null, null, event);
  }

  ngAfterViewInit() {
    const obs = fromEvent(this.ele.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      debounceTime(3000)
    );

    this.searchSub = obs.subscribe((search) => {
      this.loadResult(search, null, null);
    });
  }

  ngOnDestroy() {
    this.bookSub.unsubscribe();
    this.searchSub.unsubscribe();
  }
}
