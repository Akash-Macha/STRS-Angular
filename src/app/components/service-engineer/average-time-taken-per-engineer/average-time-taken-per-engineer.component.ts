import { Component, OnInit } from '@angular/core';
import { ServiceEngineerService } from 'src/app/services/service-engineer-service/service-engineer.service';

@Component({
  selector: 'app-average-time-taken-per-engineer',
  templateUrl: './average-time-taken-per-engineer.component.html',
  styleUrls: ['./average-time-taken-per-engineer.component.css']
})
export class AverageTimeTakenPerEngineerComponent implements OnInit {

  public Statistics:any;
  
  private _url:string= 'http://localhost:8181';

  constructor(private _serviceEngineerService:ServiceEngineerService) { }

  ngOnInit() {
    this._serviceEngineerService.getStatsOfEngineer().subscribe(
      (data) => {
        this.Statistics = data;
        console.log("data in averageTime Taken per engineer = " + data);
      }
    );
  }

}
