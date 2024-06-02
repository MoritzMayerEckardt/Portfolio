import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [HeaderComponent, SocialMediaComponent],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss'
})
export class HeroPageComponent {

}
