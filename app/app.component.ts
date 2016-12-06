import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello {{name}} {{id}}</h1>' ,
})
export class AppComponent  { 
    name = 'Angular'; 
    id = 'Version 1.0 by Nilesh Devdas'
}
