import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarifsService {

  BASE_URL = 'https://opendata.lillemetropole.fr/api/records/1.0/search/';

  constructor(private http: HttpClient) { }

getTarifFilterByPrice() {
  return this.http.get(this.BASE_URL + '?dataset=transpole-gammetarifaire&rows=20&sort=-prix&facet=typetitreproduit');
}

}
