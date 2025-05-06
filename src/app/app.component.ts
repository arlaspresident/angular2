import { Component } from '@angular/core';
import { CourseTableComponent } from './components/course-table/course-table.component';

@Component({
  selector: 'app-root',
  imports: [CourseTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kurs-tabell';
}
