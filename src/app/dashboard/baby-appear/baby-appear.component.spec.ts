import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {Router, Routes} from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { MatIconModule } from "@angular/material";
import {NgxMaskModule} from 'ngx-mask'
import { BabyAppearComponent } from './baby-appear.component';
import { DataService } from '../../shared/service/data.service';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

export const routes: Routes = [
  {
    path: '',
    component: BabyAppearComponent
  }
];

describe('BabyAppearComponent', () => {
  let component: BabyAppearComponent;
  let fixture: ComponentFixture<BabyAppearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyAppearComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule,
        MatIconModule,
        NgbDatepickerModule,
        RouterTestingModule.withRoutes(routes),
        ToastrModule.forRoot(),
        BsDatepickerModule.forRoot(),
        NgxMaskModule.forRoot()],
        providers:[DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyAppearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

