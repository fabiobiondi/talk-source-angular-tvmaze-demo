import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Series, Show } from './model/series';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'fb-root',
  template: `
    <input
      placeholder="Search a TV Series"
      type="text" [formControl]="inputRef">

    <fb-list
      [data]="result"
      (itemClick)="itemClickHandler($event)"
    ></fb-list>

    <fb-modal
      *ngIf="showDetails"
      [show]="showDetails"
      (closeModal)="closeDetails()"
    ></fb-modal>
  `,
})
export class AppComponent {
  result: Series[];
  showDetails: Show;
  inputRef = new FormControl();

  constructor(private http: HttpClient) {
    this.inputRef.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(text => this.search(text));
  }

  itemClickHandler(series: Series): void {
    this.showDetails = series.show;
  }

  search(text: string): void {
    this.http.get<Series[]>('http://api.tvmaze.com/search/shows?q=' + text)
      .subscribe(res => this.result = res)
  }

  closeDetails(): void {
    this.showDetails = null;
  }
}
