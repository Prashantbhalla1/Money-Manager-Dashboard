import {
    Component,
    Inject,
    OnInit,
    AfterViewInit,
    ChangeDetectorRef,
    OnDestroy
  } from "@angular/core";
  import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatSnackBar,
    MatInput,
    MatSelect,
    MatOption,
    MatCheckbox,
    MatTableDataSource,
    MatRadioButton,
    MatRadioGroup,
    MatDivider
  } from "@angular/material";
  import {
    FormControl,
    FormGroup,
    FormBuilder,
    FormArray,
    Validators
  } from "@angular/forms";
  import "rxjs/add/observable/of";
  import { ReplaySubject, Subject } from "rxjs";
  import {
    debounceTime,
    delay,
    tap,
    filter,
    map,
    takeUntil
  } from "rxjs/operators";
  import { forkJoin } from "rxjs/observable/forkJoin";
  import { Observable } from "rxjs";
  import { Router, ActivatedRoute } from "@angular/router";

import { TranslateService } from "@ngx-translate/core";
  
  @Component({
    selector: "app-login-modal",
    templateUrl: "./login-modal.component.html",
    styleUrls: ["./login-modal.component.scss"]
  })
  export class LoginModalComponent implements OnInit, AfterViewInit {
    myControl = new FormControl();
    
  
    loading = false;
    pageType= '';
    selectLanguage = '';
    selectLanguageList = [{id:7,country: "US",isDefaultLocale : false, language : "English - US", locale : "en",status : "ENABLED"}];
    constructor(
      public matSnackBar: MatSnackBar,
      public dialogRef: MatDialogRef<LoginModalComponent>,
      public dialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    ngOnInit(): void {
      
    }
    ngAfterViewInit() {
      
    }
  
  }  