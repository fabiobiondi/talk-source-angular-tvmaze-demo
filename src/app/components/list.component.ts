import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Series } from '../model/series';

@Component({
  selector: 'fb-list',
  template: `
    <div class="grid">
      <div class="grid-item" *ngFor="let series of data" >
        <div class="movie" (click)="itemClick.emit(series)">
          <img *ngIf="series.show.image" [src]="series.show.image?.medium" >
          <div *ngIf="!series.show.image" class="noImage"></div>
          <div  class="movieText">{{series.show.name}}</div>

        </div>
      </div>
    </div>
  `,
  styles: [`
    /** tv maze results */
    .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .grid-item {
      flex-grow: 0;
    }

    .movie {
      width: 100px;
      text-align: center;
      margin: 10px;
      cursor: pointer;
    }

    .movie img{
      width: 100%
    }

    .noImage {
      width: 100%;
      height: 140px;
      border: 1px solid #ccc;
      background: repeating-linear-gradient(
          -55deg,
          #222,
          #222 10px,
          #333 10px,
          #333 20px
      );
    }

    .movieText {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }

  `]
})
export class ListComponent {
  @Input() data: Series[];
  @Output() itemClick = new EventEmitter<Series>()

}
