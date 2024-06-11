import { Component, OnInit } from '@angular/core';
import { ContactformComponent } from './contactform/contactform.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactformComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
