import { Routes } from '@angular/router';
import { CourseTableComponent } from './components/course-table/course-table.component';


export const routes: Routes = [
    { path: '', redirectTo: '/kurser', pathMatch: 'full' },
    { path: 'kurser', component: CourseTableComponent },
    { path: '**', redirectTo: '/kurser' }
];
