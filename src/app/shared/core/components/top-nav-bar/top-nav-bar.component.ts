import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { ReadingDataService } from 'src/app/shared/service/reading-data.service';
import { AppConstant } from 'src/app/shared/constant/app-constant';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor(private router:Router,public dataService:DataService,public readingDataService:ReadingDataService,private constant:AppConstant) { }
  selectedTab:string;
  hospitalName:string;
  loginHospital:any={};
  hospitalBranchName:string;
  staffUser=["DashboardStaff","MessageCenter","MyProfile"];
  ReferralUser=["DashboardStaff","MyProfile"];
  branchAdmin=["Dashboard","MedicalRecords","HospitalStaff","Settings","MessageCenter","MyProfile"];
  hospitalAdmin=["Dashboard","MedicalRecords","HospitalStaff","Settings","MessageCenter","MyProfile","AddBranch"];
  ngOnInit() {
    this.selectedTab='dashboard';
    this.loginHospital=JSON.parse(localStorage.getItem("login_hospital"));
    this.hospitalName=this.loginHospital['hospital_name'];
    this.hospitalBranchName=this.loginHospital['hospital_branch_name'];
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/"]);
    this.dataService.clearOption();
    this.readingDataService.isMotherProfileHaveResp = true;
    this.readingDataService.clearReadingFormData();
    this.readingDataService.reset();
    this.readingDataService.resetAll();
  }

  changeProfile(){
    if(this.loginHospital['user_type']==this.constant.staff_type_login){
      this.router.navigate(["admin/staff-profile"]);
    }
    if(this.loginHospital['user_type']==this.constant.hospital_type_login){
      this.router.navigate(["admin/my-profile"]);
    }
    if(this.loginHospital['user_type']==this.constant.branch_type_login){
      this.router.navigate(["admin/branch-admin-profile"]);
    }
    
  }

  activeTab(tabName){
    this.selectedTab=tabName;
  }

  showPermission(tabName){
    if(this.loginHospital['user_type']==this.constant.hospital_type_login){
        return this.hospitalAdmin.includes(tabName);
    }
    if(this.loginHospital['user_type']==this.constant.branch_type_login){
      return this.branchAdmin.includes(tabName);
    }
    if(this.loginHospital['user_type']==this.constant.staff_type_login){
      return this.staffUser.includes(tabName);
    }
    if(this.loginHospital['referral_doctor_login']==this.constant.staff_type_login){
      return this.ReferralUser.includes(tabName);
    }
  }

}
