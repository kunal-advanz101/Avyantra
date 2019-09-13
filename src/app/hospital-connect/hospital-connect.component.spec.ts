// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { HospitalConnectComponent } from './hospital-connect.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHelper } from '../shared/helper/app.helper';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


=======
// import { HospitalConnectComponent } from './hospital-connect.component';
>>>>>>> f03a917a7c22c21fa21dab0bb1ac1923386a5c7e

// describe('HospitalConnectComponent', () => {
//   let component: HospitalConnectComponent;
//   let fixture: ComponentFixture<HospitalConnectComponent>;

<<<<<<< HEAD
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalConnectComponent ],
      imports: [
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientModule
        
       
    ],
    providers:[AppHelper]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalConnectComponent);
    component = fixture.componentInstance;
    let setValue={};
    spyOn(window.localStorage,"setItem").and.callFake((key,value)=>{
      return setValue[key]=value;
    })
    spyOn(window.localStorage,"getItem").and.callFake(()=>{
      return JSON.stringify({"referral_id":123})
    })

    fixture.detectChanges();

  });

  it('should create', () => {
    localStorage.setItem("login_hospital",JSON.stringify({"referral_id":123}));
    expect(component).toBeTruthy();
  });
});
=======
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HospitalConnectComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HospitalConnectComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
>>>>>>> f03a917a7c22c21fa21dab0bb1ac1923386a5c7e
