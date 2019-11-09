import { Component } from '@angular/core';
import { hello } from '../external/sample.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  buttonClick() {
    console.log('btn click called. 1.');
    hello();
    console.log('btn click called. 2.');
  }
}
