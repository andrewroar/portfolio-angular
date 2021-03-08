import { Component, OnInit } from '@angular/core';
import {ContactService} from './contact.service'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  courses = [1,2,3,4,5]


  constructor(service: ContactService, private titleService: Title ) {
    

  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.setTitle("Contact")
  }

}
