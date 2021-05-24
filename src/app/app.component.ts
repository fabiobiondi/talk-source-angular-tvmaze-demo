import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Series, Show } from './model/series';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'fb-root',
  template: `
    <input type="text" [formControl]="inputRef">

    <div class="grid">
      <div class="grid-item" *ngFor="let series of result" >
        <div class="movie" (click)="itemClickHandler(series)">
          <img *ngIf="series.show.image" [src]="series.show.image?.medium" >
          <div *ngIf="!series.show.image" class="noImage"></div>
          <div  class="movieText">{{series.show.name}}</div>

        </div>
      </div>
    </div>

    <div class="wrapper" *ngIf="showDetails">
      <div class="content">

         <span
           class="closeButton"
           (click)="closeDetails()"
           aria-label="Close"
         >×</span>

        <img class="image" [src]="showDetails?.image?.original" alt=""/>


        <div class="metadata">
          <h1>{{showDetails?.name}}</h1>
          <span class="tag" *ngFor="let tag of showDetails.genres">{{tag}}</span>
          <div class="summary" [innerHTML]="showDetails.summary"></div>
          <a class="button" [href]="showDetails?.url" target="_blank" rel="noopener noreferrer">Visit website</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./tvmaze.css']
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
