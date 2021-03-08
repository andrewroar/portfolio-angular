import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class BanlistService{
    
    constructor(private http: HttpClient) { }
    getBanlist(){
        
        //var banlist_data = this.http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg').toPromise().then(data => {console.log(data);return data})

        var banlist_data = this.http.get<any>('https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg')
        
        
        
        return banlist_data
    }
    showBanlist(){
        console.log(this.http.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg"))

    }

}