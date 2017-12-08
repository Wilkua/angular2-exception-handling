import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  public explode () {
    throw Error('Exploded');
  }
}
