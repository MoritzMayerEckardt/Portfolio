import { Component, OnInit } from '@angular/core';
import { SocialMediaComponent } from './social-media/social-media.component';
import { HeaderComponent } from './header/header.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [SocialMediaComponent, HeaderComponent],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
