import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { Sidebar_Directives } from './dashboard/sidenav/sidenav.directive';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectizeModule } from 'ng-selectize';
import { MomentModule } from 'ngx-moment';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormWizardModule } from 'angular2-wizard';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { TopnavComponent } from './dashboard/topnav/topnav.component';

import { AuthenticationService } from './services/authentication/authentication.service';
import { GuardService } from './services/authentication/guard/guard.service';
import { InterceptorService } from './services/authentication/interceptor/interceptor.service';
import { InstitutionComponent } from './dashboard/pages/setting/institution/institution.component';
import { EducationtypeComponent } from './dashboard/pages/setting/educationtype/educationtype.component';

import { FormInstitutionComponent } from './dashboard/pages/setting/institution/form-institution/form-institution.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { FormEducationtypeComponent } from './dashboard/pages/setting/educationtype/form-educationtype/form-educationtype.component';
import { EducationlevelComponent } from './dashboard/pages/setting/educationlevel/educationlevel.component';
import { FormEducationlevelComponent } from './dashboard/pages/setting/educationlevel/form-educationlevel/form-educationlevel.component';
import { EducationareaComponent } from './dashboard/pages/setting/educationarea/educationarea.component';
import { FormEducationareaComponent } from './dashboard/pages/setting/educationarea/form-educationarea/form-educationarea.component';
import { EducationComponent } from './dashboard/pages/setting/education/education.component';
import { FormEducationComponent } from './dashboard/pages/setting/education/form-education/form-education.component';
import { SchoolcycleComponent } from './dashboard/pages/setting/schoolcycle/schoolcycle.component';
import { SchoolperiodComponent } from './dashboard/pages/setting/schoolperiod/schoolperiod.component';
import { EducationsystemComponent } from './dashboard/pages/setting/educationsystem/educationsystem.component';
import { FormEducationsystemComponent } from './dashboard/pages/setting/educationsystem/form-educationsystem/form-educationsystem.component';
import { FormSchoolperiodComponent } from './dashboard/pages/setting/schoolperiod/form-schoolperiod/form-schoolperiod.component';
import { FormSchoolcycleComponent } from './dashboard/pages/setting/schoolcycle/form-schoolcycle/form-schoolcycle.component';
import { SchoolComponent } from './dashboard/pages/school/school.component';
import { SchoolgradeComponent } from './dashboard/pages/school/schoolgrade/schoolgrade.component';
import { FormSchoolgradeComponent } from './dashboard/pages/school/schoolgrade/form-schoolgrade/form-schoolgrade.component';
import { SchooloriginlevelComponent } from './dashboard/pages/school/schooloriginlevel/schooloriginlevel.component';
import { FormSchooloriginlevelComponent } from './dashboard/pages/school/schooloriginlevel/form-schooloriginlevel/form-schooloriginlevel.component';
import { SchooloriginComponent } from './dashboard/pages/school/schoolorigin/schoolorigin.component';
import { FormSchooloriginComponent } from './dashboard/pages/school/schoolorigin/form-schoolorigin/form-schoolorigin.component';
import { SchoolmateriaComponent } from './dashboard/pages/school/schoolmateria/schoolmateria.component';
import { FormSchoolmateriaComponent } from './dashboard/pages/school/schoolmateria/form-schoolmateria/form-schoolmateria.component';
import { WeekdayComponent } from './dashboard/pages/school/weekday/weekday.component';
import { FormWeekdayComponent } from './dashboard/pages/school/weekday/form-weekday/form-weekday.component';
import { SchoolgroupComponent } from './dashboard/pages/school/schoolgroup/schoolgroup.component';
import { FormSchoolgroupComponent } from './dashboard/pages/school/schoolgroup/form-schoolgroup/form-schoolgroup.component';
import { StudentparentComponent } from './dashboard/pages/school/studentparent/studentparent.component';
import { FormStudentparentComponent } from './dashboard/pages/school/studentparent/form-studentparent/form-studentparent.component';
import { GroupmateriastudentComponent } from './dashboard/pages/school/groupmateriastudent/groupmateriastudent.component';
import { FormGroupmateriastudentComponent } from './dashboard/pages/school/groupmateriastudent/form-groupmateriastudent/form-groupmateriastudent.component';
import { DriveComponent } from './dashboard/pages/drive/drive.component';
import { DocumentsComponent } from './dashboard/pages/drive/documents/documents.component';
import { FormDocumentsComponent } from './dashboard/pages/drive/documents/form-documents/form-documents.component';
import { TeacherComponent } from './dashboard/pages/teacher/teacher.component';
import { FormTeacherComponent } from './dashboard/pages/teacher/form-teacher/form-teacher.component';
// import { Moment } from 'moment';

import * as moment from 'moment';
import { EnrollmentComponent } from './dashboard/pages/enrollment/enrollment.component';
import { EducationstudyplanComponent } from './dashboard/pages/setting/educationstudyplan/educationstudyplan.component';
import { FormEducationstudyplanComponent } from './dashboard/pages/setting/educationstudyplan/form-educationstudyplan/form-educationstudyplan.component';
import { HasschoolshiftComponent } from './dashboard/pages/setting/hasschoolshift/hasschoolshift.component';
import { FormHasschoolshiftComponent } from './dashboard/pages/setting/hasschoolshift/form-hasschoolshift/form-hasschoolshift.component';
import { SchoolshiftComponent } from './dashboard/pages/setting/schoolshift/schoolshift.component';
import { FormSchoolshiftComponent } from './dashboard/pages/setting/schoolshift/form-schoolshift/form-schoolshift.component';
import { EducationperiodComponent } from './dashboard/pages/school/educationperiod/educationperiod.component';
import { RegionComponent } from './dashboard/pages/region/region.component';
import { StateComponent } from './dashboard/pages/region/state/state.component';
import { CityComponent } from './dashboard/pages/region/city/city.component';
import { CountryComponent } from './dashboard/pages/region/country/country.component';
import { FormEnrollmentComponent } from './dashboard/pages/enrollment/form-enrollment/form-enrollment.component';
import { FormEducationperiodComponent } from './dashboard/pages/school/educationperiod/form-educationperiod/form-educationperiod.component';
import { SettingComponent } from './dashboard/pages/setting/setting.component';
import { HomesettingComponent } from './dashboard/pages/setting/homesetting/homesetting.component';
import { BreadcrumbComponent } from './dashboard/tool/breadcrumb/breadcrumb.component';
import { HomeenrollmentComponent } from './dashboard/pages/enrollment/homeenrollment/homeenrollment.component';
import { HomeschoolComponent } from './dashboard/pages/school/homeschool/homeschool.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotfoundComponent,
    SidenavComponent,
    TopnavComponent,
    Sidebar_Directives,
    InstitutionComponent,
    EducationtypeComponent,
    FormInstitutionComponent,
    FooterComponent,
    FormEducationtypeComponent,
    EducationlevelComponent,
    FormEducationlevelComponent,
    EducationareaComponent,
    FormEducationareaComponent,
    EducationComponent,
    FormEducationComponent,
    SchoolcycleComponent,
    SchoolperiodComponent,
    EducationsystemComponent,
    FormEducationsystemComponent,
    FormSchoolperiodComponent,
    FormSchoolcycleComponent,
    SchoolComponent,
    SchoolgradeComponent,
    FormSchoolgradeComponent,
    SchooloriginlevelComponent,
    FormSchooloriginlevelComponent,
    SchooloriginComponent,
    FormSchooloriginComponent,
    SchoolmateriaComponent,
    FormSchoolmateriaComponent,
    WeekdayComponent,
    FormWeekdayComponent,
    SchoolgroupComponent,
    FormSchoolgroupComponent,
    StudentparentComponent,
    FormStudentparentComponent,
    GroupmateriastudentComponent,
    FormGroupmateriastudentComponent,
    DriveComponent,
    DocumentsComponent,
    FormDocumentsComponent,
    TeacherComponent,
    FormTeacherComponent,
    EnrollmentComponent,
    EducationstudyplanComponent,
    FormEducationstudyplanComponent,
    HasschoolshiftComponent,
    FormHasschoolshiftComponent,
    SchoolshiftComponent,
    FormSchoolshiftComponent,
    EducationperiodComponent,
    RegionComponent,
    StateComponent,
    CityComponent,
    CountryComponent,
    FormEnrollmentComponent,
    FormEducationperiodComponent,
    SettingComponent,
    HomesettingComponent,
    BreadcrumbComponent,
    HomeenrollmentComponent,
    HomeschoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    DataTablesModule, // DataTablesModule added
    NgSelectizeModule,
    MomentModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MomentModule,
    SweetAlert2Module.forRoot(),
    FormWizardModule
  ],
  providers: [
    AuthenticationService,
    GuardService,
    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass : InterceptorService,
    //   multi : true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
