import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/Services/corona.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  info: any = null;

  ngOnInit(): void {
    
  }
  constructor(private coronaService: CoronaService) {
    this.coronaService.getCountryData().subscribe((data)=>{
      this.info = data;
    });
  }
}
