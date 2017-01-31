import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username:string;
    private client_id = 'dea7ceaecb6cabd6425e';
    private client_secret = '6768ccabbd57b2411e06f6e76969354a0862c465';
    
    constructor(private _http: Http){
        console.log('work');
        this.username = 'just4smile';
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }
    getRepos(){
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }
    updateUser(username:string){
        this.username = username;
    }
}