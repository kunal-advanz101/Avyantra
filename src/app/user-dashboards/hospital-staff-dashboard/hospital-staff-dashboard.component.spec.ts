// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { HospitalStaffDashboardComponent } from './hospital-staff-dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppHelper } from 'src/app/shared/helper/app.helper';
import { ToastrModule } from 'ngx-toastr';
=======
// import { HospitalStaffDashboardComponent } from './hospital-staff-dashboard.component';
>>>>>>> f03a917a7c22c21fa21dab0bb1ac1923386a5c7e

// describe('HospitalStaffDashboardComponent', () => {
//   let component: HospitalStaffDashboardComponent;
//   let fixture: ComponentFixture<HospitalStaffDashboardComponent>;

<<<<<<< HEAD
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalStaffDashboardComponent ],
      imports:[
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,
        HttpClientModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
      ],
      providers:[
        AppHelper,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalStaffDashboardComponent);
    component = fixture.componentInstance;

    let store = {};
    spyOn(window.localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify({ "id": 123, "hospital_branch_id":12345 });
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return store[key] = value;
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    localStorage.setItem("login_hospital",JSON.stringify({"id":92,"hospital_branch_id":12345}));

    expect(component).toBeTruthy();
  });
});
=======
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HospitalStaffDashboardComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HospitalStaffDashboardComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
>>>>>>> f03a917a7c22c21fa21dab0bb1ac1923386a5c7e
