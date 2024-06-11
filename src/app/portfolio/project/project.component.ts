import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from '../../shared/components/projectsdata.service';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  providers: [ProjectsDataService],
})
export class ProjectComponent implements OnInit {
  projects: any[];

  constructor(private projectsService: ProjectsDataService) {
    this.projects = this.projectsService.projects;
   };

   ngOnInit(): void {
    AOS.init();
   }
}

 