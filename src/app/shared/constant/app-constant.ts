import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppConstant {
  public MONTH_ARRAY=[ "01",  "02",  "03",  "04",  "05",  "06",  "07",  "08",  "09",  "10",  "11",  "12"];
  public pageLimit=10;
  public hospital_type=2;
  public hospital_branch_type=3;
  public hospital_type_login="Hospital";
  public branch_type_login="Hospital Branch";
}
