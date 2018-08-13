import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit
{
  form: FormGroup;
  readonly timesList = ['3', '4', '5', '10', '15', '20', '30', '60'];
  readonly langList = [
    {id: 'en', name: 'English'},
    {id: 'test', name: 'Test'},
  ];

  currentLang: 'en';
  currentRefreshRate: '3';

  constructor(
    private router: Router,
    private location: Location,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'refreshRate': new FormControl('5'),
      'language': new FormControl('en'),
    });

    this.form.valueChanges.subscribe(value => {
      console.log(value.refreshRate);
      this.changeLanguage(value.language);
    });
  }

  password() {
    this.router.navigate(['settings/password']);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  back() {
    this.location.back();
  }
}
