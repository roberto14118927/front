import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { GuardService } from './services/authentication/guard/guard.service';

import { InstitutionComponent } from './dashboard/pages/setting/institution/institution.component';
import { FormInstitutionComponent } from './dashboard/pages/setting/institution/form-institution/form-institution.component';
import { EducationtypeComponent } from './dashboard/pages/setting/educationtype/educationtype.component';
import { FormEducationtypeComponent } from './dashboard/pages/setting/educationtype/form-educationtype/form-educationtype.component';
import { EducationlevelComponent } from './dashboard/pages/setting/educationlevel/educationlevel.component';
import { FormEducationlevelComponent } from './dashboard/pages/setting/educationlevel/form-educationlevel/form-educationlevel.component';
import { EducationareaComponent } from './dashboard/pages/setting/educationarea/educationarea.component';
import { FormEducationareaComponent } from './dashboard/pages/setting/educationarea/form-educationarea/form-educationarea.component';
import { EducationComponent } from './dashboard/pages/setting/education/education.component';
import { FormEducationComponent } from './dashboard/pages/setting/education/form-education/form-education.component';
import { EducationsystemComponent } from './dashboard/pages/setting/educationsystem/educationsystem.component';
import { FormEducationsystemComponent } from './dashboard/pages/setting/educationsystem/form-educationsystem/form-educationsystem.component';
import { SchoolperiodComponent } from './dashboard/pages/setting/schoolperiod/schoolperiod.component';
import { FormSchoolperiodComponent } from './dashboard/pages/setting/schoolperiod/form-schoolperiod/form-schoolperiod.component';
import { SchoolcycleComponent } from './dashboard/pages/setting/schoolcycle/schoolcycle.component';
import { FormSchoolcycleComponent } from './dashboard/pages/setting/schoolcycle/form-schoolcycle/form-schoolcycle.component';
import { SchoolComponent } from './dashboard/pages/school/school.component';
import { SchoolgradeComponent } from './dashboard/pages/school/schoolgrade/schoolgrade.component';
import { FormSchoolgradeComponent } from './dashboard/pages/school/schoolgrade/form-schoolgrade/form-schoolgrade.component';
import { SchooloriginlevelComponent } from './dashboard/pages/school/schooloriginlevel/schooloriginlevel.component';
import { FormSchooloriginlevelComponent } from './dashboard/pages/school/schooloriginlevel/form-schooloriginlevel/form-schooloriginlevel.component';
import { SchooloriginComponent } from './dashboard/pages/school/schoolorigin/schoolorigin.component';
import { FormSchooloriginComponent } from './dashboard/pages/school/schoolorigin/form-schoolorigin/form-schoolorigin.component';
import { WeekdayComponent } from './dashboard/pages/school/weekday/weekday.component';
import { FormWeekdayComponent } from './dashboard/pages/school/weekday/form-weekday/form-weekday.component';
import { SchoolgroupComponent } from './dashboard/pages/school/schoolgroup/schoolgroup.component';
import { FormSchoolgroupComponent } from './dashboard/pages/school/schoolgroup/form-schoolgroup/form-schoolgroup.component';
import { DriveComponent } from './dashboard/pages/drive/drive.component';
import { DocumentsComponent } from './dashboard/pages/drive/documents/documents.component';
import { FormDocumentsComponent } from './dashboard/pages/drive/documents/form-documents/form-documents.component';
import { TeacherComponent } from './dashboard/pages/teacher/teacher.component';
import { FormTeacherComponent } from './dashboard/pages/teacher/form-teacher/form-teacher.component';
import { HasschoolshiftComponent } from './dashboard/pages/setting/hasschoolshift/hasschoolshift.component';
import { FormHasschoolshiftComponent } from './dashboard/pages/setting/hasschoolshift/form-hasschoolshift/form-hasschoolshift.component';
import { SchoolshiftComponent } from './dashboard/pages/setting/schoolshift/schoolshift.component';
import { FormSchoolshiftComponent } from './dashboard/pages/setting/schoolshift/form-schoolshift/form-schoolshift.component';
import { EducationstudyplanComponent } from './dashboard/pages/setting/educationstudyplan/educationstudyplan.component';
import { FormEducationstudyplanComponent } from './dashboard/pages/setting/educationstudyplan/form-educationstudyplan/form-educationstudyplan.component';
import { SchoolmateriaComponent } from './dashboard/pages/school/schoolmateria/schoolmateria.component';
import { FormSchoolmateriaComponent } from './dashboard/pages/school/schoolmateria/form-schoolmateria/form-schoolmateria.component';
import { GroupmateriastudentComponent } from './dashboard/pages/school/groupmateriastudent/groupmateriastudent.component';
import { FormGroupmateriastudentComponent } from './dashboard/pages/school/groupmateriastudent/form-groupmateriastudent/form-groupmateriastudent.component';
import { EducationperiodComponent } from './dashboard/pages/school/educationperiod/educationperiod.component';
import { FormEducationperiodComponent } from './dashboard/pages/school/educationperiod/form-educationperiod/form-educationperiod.component';
import { StudentparentComponent } from './dashboard/pages/school/studentparent/studentparent.component';
import { FormStudentparentComponent } from './dashboard/pages/school/studentparent/form-studentparent/form-studentparent.component';
import { EnrollmentComponent } from './dashboard/pages/enrollment/enrollment.component';
import { SettingComponent } from './dashboard/pages/setting/setting.component';
import { HomesettingComponent } from './dashboard/pages/setting/homesetting/homesetting.component';
import { HomeenrollmentComponent } from './dashboard/pages/enrollment/homeenrollment/homeenrollment.component';
import { HomeschoolComponent } from './dashboard/pages/school/homeschool/homeschool.component';
import { FormEnrollmentComponent } from './dashboard/pages/enrollment/form-enrollment/form-enrollment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  { path: 'login', component: LoginComponent },
  
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardService],
    children: [

      {
        path: 'settings', component: SettingComponent,
        children: [
          { path: '', component: HomesettingComponent },

          { path: 'institution', component: InstitutionComponent },
          { path: 'institution/new', component: FormInstitutionComponent },
          { path: 'institution/edit/:id', component: FormInstitutionComponent },

          { path: 'educationtype', component: EducationtypeComponent },
          { path: 'educationtype/new', component: FormEducationtypeComponent },
          { path: 'educationtype/edit/:id', component: FormEducationtypeComponent },

          { path: 'educationlevel', component: EducationlevelComponent },
          { path: 'educationlevel/new', component: FormEducationlevelComponent },
          { path: 'educationlevel/edit/:id', component: FormEducationlevelComponent },

          { path: 'educationarea', component: EducationareaComponent },
          { path: 'educationarea/new', component: FormEducationareaComponent },
          { path: 'educationarea/edit/:id', component: FormEducationareaComponent },

          { path: 'education', component: EducationComponent },
          { path: 'education/new', component: FormEducationComponent },
          { path: 'education/edit/:id', component: FormEducationComponent },

          { path: 'schoolcycle', component: SchoolcycleComponent },
          { path: 'schoolcycle/new', component: FormSchoolcycleComponent },
          { path: 'schoolcycle/edit/:id', component: FormSchoolcycleComponent },

          { path: 'schoolperiod', component: SchoolperiodComponent },
          { path: 'schoolperiod/new', component: FormSchoolperiodComponent },
          { path: 'schoolperiod/edit/:id', component: FormSchoolperiodComponent },

          { path: 'educationsystem', component: EducationsystemComponent },
          { path: 'educationsystem/new', component: FormEducationsystemComponent },
          { path: 'educationsystem/edit/:id', component: FormEducationsystemComponent },

          { path: 'hasschoolshift', component: HasschoolshiftComponent },
          { path: 'hasschoolshift/new', component: FormHasschoolshiftComponent },
          { path: 'hasschoolshift/edit/:id', component: FormHasschoolshiftComponent },

          { path: 'schoolshift', component: SchoolshiftComponent },
          { path: 'schoolshift/new', component: FormSchoolshiftComponent },
          { path: 'schoolshift/edit/:id', component: FormSchoolshiftComponent },

          { path: 'educationstudyplan', component: EducationstudyplanComponent },
          { path: 'educationstudyplan/new', component: FormEducationstudyplanComponent },
          { path: 'educationstudyplan/edit/:id', component: FormEducationstudyplanComponent }
        ]
      },

      {
        path: 'school', component: SchoolComponent,
        children: [
          { path: '', component: HomeschoolComponent },

          { path: 'schoolgrade', component: SchoolgradeComponent },
          { path: 'schoolgrade/new', component: FormSchoolgradeComponent },
          { path: 'schoolgrade/edit/:id', component: FormSchoolgradeComponent },

          { path: 'schooloriginlevel', component: SchooloriginlevelComponent },
          { path: 'schooloriginlevel/new', component: FormSchooloriginlevelComponent },
          { path: 'schooloriginlevel/edit/:id', component: FormSchooloriginlevelComponent },

          { path: 'schoolorigin', component: SchooloriginComponent },
          { path: 'schoolorigin/new', component: FormSchooloriginComponent },
          { path: 'schoolorigin/edit/:id', component: FormSchooloriginComponent },

          { path: 'schoolgroup', component: SchoolgroupComponent },
          { path: 'schoolgroup/new', component: FormSchoolgroupComponent },
          { path: 'schoolgroup/edit/:id', component: FormSchoolgroupComponent },

          { path: 'weekday', component: WeekdayComponent },
          { path: 'weekday/new', component: FormWeekdayComponent },
          { path: 'weekday/edit/:id', component: FormWeekdayComponent },

          { path: 'materia', component: SchoolmateriaComponent },
          { path: 'materia/new', component: FormSchoolmateriaComponent },
          { path: 'materia/edit/:id', component: FormSchoolmateriaComponent },

          { path: 'groupmateriastudent', component: GroupmateriastudentComponent },
          { path: 'groupmateriastudent/new', component: FormGroupmateriastudentComponent },
          { path: 'groupmateriastudent/edit/:id', component: FormGroupmateriastudentComponent },

          { path: 'educationperiod', component: EducationperiodComponent },
          { path: 'educationperiod/new', component: FormEducationperiodComponent },
          { path: 'educationperiod/edit/:id', component: FormEducationperiodComponent },

          { path: 'studentparent', component: StudentparentComponent },
          { path: 'studentparent/new', component: FormStudentparentComponent },
          { path: 'studentparent/edit/:id', component: FormStudentparentComponent },

        ]
      },

      {
        path: 'drive', component: DriveComponent,
        children: [
          { path: 'documents', component: DocumentsComponent },
          { path: 'documents/new', component: FormDocumentsComponent },
          { path: 'documents/edit/:id', component: FormDocumentsComponent },
        ]
      },

      {
        path: 'enrollment', component: EnrollmentComponent,
        children: [
          { path: '', component: HomeenrollmentComponent },

          
          { path: 'new', component: FormEnrollmentComponent },

        ]
      },



      { path: 'teacher', component: TeacherComponent },

    ]
  },

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }