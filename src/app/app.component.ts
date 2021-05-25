import { Component } from '@angular/core';

@Component({
  selector: 'fb-root',
  template: `
    <input type="text" placeholder="Search a TV Series">

    <div class="grid">
      <div class="grid-item">
        <div class="movie">
          <img src="https://static.tvmaze.com/uploads/images/medium_portrait/228/571843.jpg" >
          <div  class="movieText">Series Name</div>
        </div>
      </div>
      <div class="grid-item">
        <div class="movie">
          <div class="noImage"></div>
          <div  class="movieText">Series Name</div>
        </div>
      </div>
    </div>

    <div class="wrapper" style="display: none">
      <div class="content">
         <span
           class="closeButton"
           aria-label="Close"
         >×</span>

        <img class="image" src="https://static.tvmaze.com/uploads/images/medium_portrait/228/571843.jpg" alt=""/>


        <div class="metadata">
          <h1>Series Title</h1>
          <span class="tag">TAG</span>
          <div class="summary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid animi cum dolor eligendi eveniet illo laborum laudantium minus nemo nihil, nisi nostrum numquam perspiciatis rem repellat soluta ut vel?
          </div>
          <a class="button" href="http://www.google.com" target="_blank" rel="noopener noreferrer">Visit website</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./tvmaze.css']
})
export class AppComponent {

}
