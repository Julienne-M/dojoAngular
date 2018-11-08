import { Component, OnInit } from '@angular/core';
import { TarifsService } from '../services/tarifs.service';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-tarifs-transpole',
  templateUrl: './tarifs-transpole.component.html',
  styleUrls: ['./tarifs-transpole.component.css']
})
export class TarifsTranspoleComponent implements OnInit {

  dataTarifs: any = [];

  constructor(private apiMel: TarifsService) { }

  ngOnInit() {
    this.apiMel.getTarifFilterByPrice().subscribe((response: any) => {
      console.log(response);
      this.dataTarifs = response.records;
      console.log(this.dataTarifs);
    });
  }
}
