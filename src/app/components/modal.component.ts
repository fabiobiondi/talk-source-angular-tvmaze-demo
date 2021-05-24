import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Show } from '../model/series';

@Component({
  selector: 'fb-modal',
  template: `
    <div class="wrapper">
      <div class="content">

         <span
           class="closeButton"
           (click)="closeModal.emit()"
           aria-label="Close"
         >×</span>

        <img class="image" [src]="show?.image?.original" alt=""/>


        <div class="metadata">
          <h1>{{show?.name}}</h1>
          <span class="tag" *ngFor="let tag of show.genres">{{tag}}</span>
          <div class="summary" [innerHTML]="show.summary"></div>
          <a class="button" [href]="show?.url" target="_blank" rel="noopener noreferrer">Visit website</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow-y: auto;
      margin: 0 auto;
    }

    .content {
      position: relative;
      background-color: #222;
      color: white;
      padding: 0 0 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    .metadata {
      padding: 10px
    }

    .tag {
      background-color: #cccccc;
      border-radius: 5px;
      padding: 10px;
      margin: 0 10px 20px;
      display: inline-block;
      color: black;
    }

    .button {
      border: 1px solid white;
      border-radius: 5px;
      padding: 10px;
      margin-right: 10px;
      cursor: pointer;
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s;
    }
    .button:hover {
      color: darkcyan;
      border-color: darkcyan;
    }

    .image {
      display: block;
      margin-bottom: 20px;
      width: 100%;
    }

    .closeButton {
      color: white;
      font-size: 35px;
      position: fixed;
      top: 10px;
      right: 20px;
      cursor: pointer;
      z-index: 10;
    }

    .summary {
      padding-bottom: 20px;
    }


  `]
})
export class ModalComponent {
  @Input() show: Show;
  @Output() closeModal = new EventEmitter();
}
