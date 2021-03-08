import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';

import {ActivatedRoute} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bannedcard',
  templateUrl: './bannedcard.component.html',
  styleUrls: ['./bannedcard.component.css']
})
export class BannedcardComponent implements OnInit {
  routeID:any;

  constructor(private route: ActivatedRoute, private titleService: Title) { 

  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //console.log(params) //log the entire params object
      console.log(params.cardId) //log the value of id
      this.routeID = params.cardId
    });

    this.setTitle(this.routeID)

  }

}
