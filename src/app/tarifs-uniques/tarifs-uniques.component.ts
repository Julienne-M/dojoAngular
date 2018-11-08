import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarifs-uniques',
  templateUrl: './tarifs-uniques.component.html',
  styleUrls: ['./tarifs-uniques.component.css']
})
export class TarifsUniquesComponent implements OnInit {

@Input() libelle: string;
@Input() prix: number;

  constructor() { }

  ngOnInit() {
  }

}
