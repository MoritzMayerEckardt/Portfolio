import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
