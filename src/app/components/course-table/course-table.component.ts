import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';


@Component({
  selector: 'app-course-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit{
  courses: Course[] = [];
  filteredCourses: Course[] = [];

  sortField: keyof Course = 'code';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = data;
      },
      error: (err) => console.error(err)
    });
  }
  onSearch(term: string): void {
    const searchTerm = term.toLowerCase();
    this.filteredCourses = this.courses.filter(course =>
      course.code.toLowerCase().includes(searchTerm) ||
      course.coursename.toLowerCase().includes(searchTerm)
    );
  }
onInputChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.onSearch(input.value);
}
sortBy(field: keyof Course): void {
  if (this.sortField === field) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortField = field;
    this.sortDirection = 'asc';
  }

  this.filteredCourses.sort((a, b) => {
    const aVal = a[field]?.toString().toLowerCase() ?? '';
    const bVal = b[field]?.toString().toLowerCase() ?? '';

    if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
    if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
}
}
