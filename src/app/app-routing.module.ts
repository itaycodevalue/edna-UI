import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PreferencesShellComponent } from "./components/preferences/preferences-shell/preferences-shell.component";
import { DashboardShellComponent } from "./components/dashboard/dashboard-shell/dashboard-shell.component";
import { ClassroomShellComponent } from "./components/classroom/classroom-shell/classroom-shell.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppGuard } from "./app.guard";
import { AppBodyComponent } from "./components/app-body/app-body.component";
import { TeacherShellComponent } from './components/teacher-shell/teacher-shell.component';
import { StudentShellComponent } from './components/student-shell/student-shell.component';
const routes: Routes = [
  { path: "en", component: TeacherShellComponent, canActivate: [AppGuard] },
  { path: "student", component: StudentShellComponent },
  { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  declarations: [],
  ///remove enable tracing

  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
