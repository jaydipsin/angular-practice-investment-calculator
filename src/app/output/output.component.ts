import { Component, Input } from '@angular/core';
import {type resultData } from '../user/input.type';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Input() userInvestmentInfo!:resultData[];

}
