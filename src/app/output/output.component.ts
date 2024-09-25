import { Component, computed, inject, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class OutputComponent {
  investmentData = inject(InvestmentService);
  resultData = computed(()=>this.investmentData.resultData())
}
