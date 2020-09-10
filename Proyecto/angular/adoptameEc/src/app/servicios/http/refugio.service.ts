import { HttpClient } from '@angular/common/http';
import { Global } from './../global';
import { Injectable } from '@angular/core';

@Injectable()
export class RefugioService {
  public url: string = Global.url;
  
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getRefugios() {
    return this._httpClient.get(this.url + '/Refugio');
  }
}
