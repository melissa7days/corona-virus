import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/Services/corona.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  info: any = null;
  blah: any = null;
  ngOnInit(): void {
    
  }
  constructor(private coronaService: CoronaService) {
    this.coronaService.getCountryData().subscribe((data)=>{
      this.info = data;
    });
  this.getGraphStats();
  }
  getGraphStats(){
    this.coronaService.getStats().subscribe((data:any)=>{
      this.blah = data;
    data["South Africa"].forEach(({ date, confirmed, recovered, deaths }) =>
      console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
      
    );


      
    })
    
  }
}
