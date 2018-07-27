import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatRadioModule,MatDatepickerModule,MatSlideToggleModule,
  MatCheckboxModule,MatInputModule,MatSelectModule,MatChipsModule,MatFormFieldModule, MatNativeDateModule, DateAdapter, MatToolbarModule, MatSidenavModule, MatDividerModule, MatIconModule, MatListModule, MatTabsModule, MatAutocompleteModule, MatButtonToggleModule, MatCardModule, MatExpansionModule, MatDialogModule, MatGridListModule, MatTableModule, MatMenuModule} from '@angular/material';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { ServicesComponent } from './Services/services.component';
import { ContactUsComponent } from './ContactUs/contactus.component';
import { HelpComponent } from './Help/help.component';
import { AddmissionComponent } from './Addmission/addmission.component';
import { CoursesComponent } from './Courses/courses.component';
import { CareerComponent } from './Career/career.component';
import { FormComponent } from './Form/form.component';
import { ButtonsComponent } from './Buttons/buttons.component';
import { CardsComponent } from './Cards/cards.component';
import { DialogueComponent } from './Dialogue/dialogue.component';
import { ExpansionComponent } from './Expansion/expansion.component';
import { GridComponent } from './Grid/grid.component';
import { Table1Component } from './Table1/table1.component';
import { Dialogue1Component} from './Dialogue1/dialogue1.component';
import { ProfileComponent } from './Profile/profile.component';
import { LoginComponent } from './Login/login.component';
import { PasswordsComponent } from './Passwords/passwords.component';

const appRoot:Routes=[
  {path:'',component:SideNavComponent,
children:[
  {path:'home', component:HomeComponent},
  {path:'myforms', component:FormComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'help', component:HelpComponent},
  {path:'addmission', component:AddmissionComponent},
  {path:'courses', component:CoursesComponent},
  {path:'career', component:CareerComponent},
  {path:'button', component:ButtonsComponent},
  {path:'cards', component:CardsComponent},
  {path:'dialogue', component:DialogueComponent},
  {path:'expansion', component:ExpansionComponent},
  {path:'grid', component:GridComponent},
  {path:'table', component:Table1Component},
  {path:'login', component:LoginComponent},
  {path:'profile', component:ProfileComponent},
  {path:'passwords', component:PasswordsComponent}
]
},
 
]
@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    CoursesComponent,
    SideNavComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactUsComponent,
    HelpComponent,
    AddmissionComponent,
    FormComponent,
    ButtonsComponent,
    CardsComponent,
    DialogueComponent,
    Dialogue1Component,
    ExpansionComponent,
    GridComponent,
    Table1Component,
    ProfileComponent,
    LoginComponent,
    PasswordsComponent
   
  ],
  imports: [
    
    MatGridListModule,
    BrowserModule,
    MatDialogModule,
    MatListModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatButtonModule, 
    MatAutocompleteModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    LayoutModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [
    // {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent],
  entryComponents:[Dialogue1Component]
})
export class AppModule { }
