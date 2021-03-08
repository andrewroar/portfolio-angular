import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {BanlistService} from './ygobanlist.service';
//import {Observable} from "rxjs/Observable";
import { HttpClient, HttpClientModule, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
@Component({
  selector: 'app-ygobanlist',
  templateUrl: './ygobanlist.component.html',
  styleUrls: ['./ygobanlist.component.css']
})
export class YgobanlistComponent implements OnInit {
  //https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg
  
  banlist: any
  
  
  
  

  constructor(private titleService: Title, private service: BanlistService, private http: HttpClient) {


    //this.service.getBanlist().toPromise().then(data=>{console.log(data);return this.banlist = data})
    //this.banlist = this.service.getBanlist().toPromise().then(data=>{console.log(data);return data})
    this.service.getBanlist().subscribe({
      next: data =>{
        
        this.banlist = data.data
        
  
      }
    })

    

    //this.banlist = this.http.get('https://quoteserverbible.herokuapp.com/api')
    
    
    

    
   }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  
  
  ngOnInit(): void {
    this.setTitle("YGO Banlist")
    //this.service.getBanlist().toPromise().then(data=>{console.log(data);this.banlist = data;console.log(this.banlist)})   
  }

}

interface SearchResults{
  name: String;
  results: Array<object>
}
