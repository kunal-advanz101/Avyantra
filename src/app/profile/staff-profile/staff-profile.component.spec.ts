import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProfileComponent } from './staff-profile.component';
import { passwordPipe } from '../../shared/pipes/encrypt-password.pipe';
import { ToastrService } from 'ngx-toastr';
import { AppConstant } from '../../shared/constant/app-constant';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { AppHelper } from 'src/app/shared/helper/app.helper';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from "ngx-toastr";





describe('StaffProfileComponent', () => {
  let component: StaffProfileComponent;
  let fixture: ComponentFixture<StaffProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        StaffProfileComponent,
        passwordPipe
      ],
      imports:[
        ReactiveFormsModule,
        FormsModule,
        NgxMaskModule.forRoot(),
        HttpClientModule,
        ToastrModule.forRoot(),
      ],
      providers:[ToastrService, AppConstant, CommonService, AppHelper]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffProfileComponent);
    component = fixture.componentInstance;

    let store = {};
    spyOn(window.localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify({ "id": 123, "staff_id": 1234, "hospital_branch_id":12345 });
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return store[key] = value;
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    localStorage.setItem("login_hospital",JSON.stringify({"id":92, "staff_id":1234, "hospital_branch_id":12345}));
    expect(component).toBeTruthy();
  });
});
