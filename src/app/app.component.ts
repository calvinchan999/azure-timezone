import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'timezone';

  ngOnInit() {
    console.log('test');
    console.log(process.env);
    console.log(environment.appVersion);
  }
}
