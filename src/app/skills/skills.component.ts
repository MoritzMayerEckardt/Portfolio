import { Component, OnInit } from '@angular/core';
import { SkillsDataService } from '../shared/components/skillsdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  providers: [SkillsDataService],
})
export class SkillsComponent implements OnInit {

  skills: any[];

  constructor(private skillsService: SkillsDataService) {
    this.skills = this.skillsService.skills;
   }

  ngOnInit(): void {
    
  }
}
