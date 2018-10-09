import { Component } from '@angular/core';
import { JokesService } from './jokes.service'
import { SwUpdate } from '@angular/service-worker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testPWA';
  joke: any;
  update: boolean = false;

  constructor(private jokes: JokesService, updates: SwUpdate) {
    updates.available.subscribe(event => {
      this.update = true;
      updates.activateUpdate().then(() => document.location.reload())
    })
  }

  getNewJoke() {
    this.jokes.getJokes().subscribe(res => {
      this.joke = res;
    })
  }

  ngOnInit() {
    this.getNewJoke();
  }
}
