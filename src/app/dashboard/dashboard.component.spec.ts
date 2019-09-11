// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from "@angular/common/http";
// import {RouterTestingModule} from "@angular/router/testing";
// import {Router, Routes} from "@angular/router";
// import { MatTabsModule } from "@angular/material";
// import { DashboardComponent } from './dashboard.component';
// import { SearchComponent } from "./search/search.component";
// import { BasicComponent } from "./basic/basic.component";
// import { GeneralComponent } from "./general/general.component";
// import { LevelComponent } from "./level/level.component";
// import { MaternalComponent } from "./maternal/maternal.component";
// import { BabyAppearComponent } from "./baby-appear/baby-appear.component";
// import { BabyRespComponent } from "./baby-resp/baby-resp.component";
// import { BabyCvComponent } from "./baby-cv/baby-cv.component";
// import { BabyCnsComponent } from "./baby-cns/baby-cns.component";
// import { BabyGitComponent } from "./baby-git/baby-git.component";
// import { BabyInvestigationComponent } from "./baby-investigation/baby-investigation.component";
// import { FinalComponent } from "./final/final.component";
// import { AntibioticAdministrationComponent } from "./antibiotic-administration/antibiotic-administration.component";

// import { MatIconModule } from "@angular/material";
// import {NgxMaskModule} from 'ngx-mask';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import { ToastrModule } from "ngx-toastr";
// import { DataService } from '../shared/service/data.service';
<<<<<<< HEAD
// import { TopNavBarComponent } from '../shared/core/components/top-nav-bar/top-nav-bar.component';
=======
>>>>>>> f03a917a7c22c21fa21dab0bb1ac1923386a5c7e

// declare var $: any;
// export const routes: Routes = [
//   {
//     path: '',
//     component: DashboardComponent
//   },
//   {
//     path:'dashboard/baby-profile',
//     component:GeneralComponent
//   }
// ];

// describe('DashboardComponent', () => {
//   let component: DashboardComponent;
//   let fixture: ComponentFixture<DashboardComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DashboardComponent,
//         GeneralComponent,
//         SearchComponent,
//         BasicComponent,
//         LevelComponent,
//         MaternalComponent,
//         BabyAppearComponent,
//         BabyRespComponent,
//         BabyCvComponent,
//         BabyCnsComponent,
//         BabyGitComponent,
//         BabyInvestigationComponent,
//         FinalComponent,
<<<<<<< HEAD
//         TopNavBarComponent,
=======
>>>>>>> f03a917a7c22c21fa21dab0bb1ac1923386a5c7e
//         AntibioticAdministrationComponent ],
//       imports: [
//         MatTabsModule, MatIconModule,NgxMaskModule.forRoot(), BsDatepickerModule.forRoot(),
//         FormsModule, ReactiveFormsModule, AngularMultiSelectModule,
//         RouterTestingModule.withRoutes(routes), HttpClientModule,
//         ToastrModule.forRoot()],
//       providers:[DataService]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DashboardComponent);
//     component = fixture.componentInstance;
<<<<<<< HEAD
//     let setValue={};
//     spyOn(window.localStorage,"setItem").and.callFake((key,value)=>{
//       return setValue[key]=value;
//     })
//     spyOn(window.localStorage,"getItem").and.callFake(()=>{
//       return JSON.stringify({"hospital_name":"testname","hospital_branch_name":"testbname"})
//     })
    
    
=======
>>>>>>> f03a917a7c22c21fa21dab0bb1ac1923386a5c7e
//     fixture.detectChanges();
//   });

//   it('should create', () => {
<<<<<<< HEAD
//     localStorage.setItem("hospital_name",JSON.stringify({"hospital_name":"testname","hospital_branch_name":"testbname"}))
=======
>>>>>>> f03a917a7c22c21fa21dab0bb1ac1923386a5c7e
//     expect(component).toBeTruthy();
//   });
// });
