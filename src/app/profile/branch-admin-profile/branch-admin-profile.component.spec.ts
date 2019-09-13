<<<<<<< HEAD
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { BranchAdminProfileComponent } from './branch-admin-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { passwordPipe } from 'src/app/shared/pipes/encrypt-password.pipe';
import { NgxMaskModule } from 'ngx-mask';
import {  HttpClientModule } from '@angular/common/http';
import { AppHelper } from 'src/app/shared/helper/app.helper';
import { ToastrModule } from 'ngx-toastr';
import { By } from '@angular/platform-browser';
=======
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { BranchAdminProfileComponent } from './branch-admin-profile.component';
>>>>>>> f03a917a7c22c21fa21dab0bb1ac1923386a5c7e

// describe('BranchAdminProfileComponent', () => {
//   let component: BranchAdminProfileComponent;
//   let fixture: ComponentFixture<BranchAdminProfileComponent>;

<<<<<<< HEAD
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchAdminProfileComponent,
        passwordPipe
         ],
         imports:[
           FormsModule,
           ReactiveFormsModule,
           NgxMaskModule.forRoot(),
           ToastrModule.forRoot(),
           HttpClientModule
         ],
         providers:[AppHelper,]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchAdminProfileComponent);
    component = fixture.componentInstance;
    let setValue={};
    spyOn(window.localStorage,"setItem").and.callFake((key,value)=>{
      return setValue[key]=value;
    })
    spyOn(window.localStorage,"getItem").and.callFake(()=>{
      return JSON.stringify({"id":123,"hospital_branch_id":1234})
    })
    fixture.detectChanges();

  });

  it('should create', () => {
    localStorage.setItem("login_hospital",JSON.stringify({"id":123,"hospital_branch_id":1234}))
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.branchProfileForm.valid).toBeFalsy();
  });

  it('form validation', () => {
    //form invalid
    let component=fixture.debugElement.componentInstance;
    component.branchProfileForm['value']['userName']="test";
    component.branchProfileForm['value']['contactNumber']=12345;
    component.branchProfileForm['value']['address']="xyz";
    component.branchProfileForm['value']['emailAddress']="testdemo";
    component.branchProfileForm['value']['city']="";
    component.branchProfileForm['value']['state']="";
    component.branchProfileForm['value']['pincode']="";
    component.branchProfileForm['value']['password']="tpass";
    component.branchProfileForm['value']['branchName']="testdemo";
    component.branchProfileForm['value']['hospitalBranchId']="testdemo";
    expect(component.branchProfileForm.valid).toBeFalsy();    
  });
  it('user name validations',()=>{
    let errors={};
    let username=component.branchProfileForm.controls['userName'];
    username.setValue('test');
    errors=username.errors||{};
    expect(errors['minlength']).toBeTruthy();
    username.setValue('test123');
    errors=username.errors||{};
    expect(errors['minlength']).toBeFalsy();
  });
  it('email validations',()=>{
    let component=fixture.debugElement.componentInstance;
    let errors={};
    let email=component.branchProfileForm.controls['emailAddress'];
    email.setValue('testDemogmail.com');
    errors=email.errors||{};
    expect(errors['email']).toBeTruthy();
    expect(errors['pattern']).toBeTruthy();
    email.setValue('testDemo@gmail.com');
    errors=email.errors||{};
    expect(errors['email']).toBeFalsy(); 
  });
  
  it('password validations',()=>{
    let errors={};
    let password=component.branchProfileForm.controls['password'];
    password.setValue('test');
    errors=password.errors||{};
    expect(errors['minlength']).toBeTruthy();
    password.setValue('test123');
    errors=password.errors||{};
    expect(errors['minlength']).toBeFalsy();
  }); 

it("on cancel button",()=>{
  component.cancel();
  expect( component.isEdit).toBeFalsy();
});
it ("Hide password",()=>{
  expect(component.is_toggle).toBeFalsy();
  expect(component.password).toBe("password");
  component.show_password();
  expect(component.is_toggle).toBeTruthy();
  expect(component.password).toBe("text");
});

  
});
=======
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ BranchAdminProfileComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(BranchAdminProfileComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
>>>>>>> f03a917a7c22c21fa21dab0bb1ac1923386a5c7e
