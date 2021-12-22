import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import constants from './reference/constants';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector: 'opord-template',
  templateUrl: 'opord-template.component.html',
  styleUrls: ['opord-template.component.css'],
})
export class OpordTemplateComponent {
  constants = constants

  panelOpenState = false;
  options: FormGroup;
  weatherControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));

  // AO
  ao_north = "";
  ao_south = "";
  ao_east = "";
  ao_west = "";

  // Weather
  dailyHigh = 0;
  dailyLow = 0;
  dewFogInfo = "";
  windSpeed = 0;
  windDirection = "";

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      weather: this.weatherControl,
      fontSize: this.fontSizeControl,
    });
  }
}
