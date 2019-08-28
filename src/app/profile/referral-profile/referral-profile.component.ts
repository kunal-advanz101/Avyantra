import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../shared/service/common/common.service';
import { AppHelper } from '../../shared/helper/app.helper';
import * as _ from "underscore";
import { ToastrService } from 'ngx-toastr';
import { AppConstant } from '../../shared/constant/app-constant';

@Component({
  selector: 'app-referral-profile',
  templateUrl: './referral-profile.component.html',
  styleUrls: ['./referral-profile.component.css']
})
export class ReferralProfileComponent implements OnInit {
  hospitalId: number;
  referral_id:number;
  // hospitalBranchId: number;
  login_hospital: any = {};
  referralProfile = [];

  constructor(private formBuilder:FormBuilder,
    private commomService:CommonService,private helper:AppHelper,
    private toasty:ToastrService,private constant:AppConstant) { }

  ngOnInit() {
    this.getLoggedInUserInfo();
    this.getReferralProfile();
  }

  getLoggedInUserInfo() {
    this.login_hospital = JSON.parse(localStorage.getItem("login_hospital"));
    this.hospitalId = this.login_hospital['id'];
    this.referral_id = this.login_hospital['referral_id'];
    // this.hospitalBranchId = this.login_hospital['hospital_branch_id'];
  }

  getReferralProfile() {
    this.commomService.getReferralProfile(this.referral_id).subscribe(result => {
      if(this.helper.success(result)){
        this.success(result, 'getReferralProfile');
      }else{
        this.helper.errorHandler(result);
      }
    });
  }

  // cancel() {
  //   this.isEdit = false;
  // }

  success(response,apitype){
    if(apitype=='getReferralProfile'){
      this.referralProfile=response['response'];
    }
    // if(apitype=='updateStaffProfile'){
    //   this.toasty.success(response['message'],'')
    // }
  }

}
