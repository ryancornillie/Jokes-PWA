import { Component } from '@angular/core';
import { JokesService } from './jokes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testPWA';
  joke: any;

  constructor(private jokes: JokesService) {}

  ngOnInit() {
    this.jokes.getJokes().subscribe(res => {
      this.joke = res;
    })
  }
}
