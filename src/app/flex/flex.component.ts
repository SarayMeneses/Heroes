import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from '@teamhive/lottie-player/loader';
defineCustomElements(window);
@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {
  
  title = 'heroes';

  constructor() { }

  ngOnInit(): void {
  }

}
