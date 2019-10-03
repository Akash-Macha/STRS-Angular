import { Component, OnInit } from '@angular/core';
import { ServiceEngineerService } from 'src/app/services/service-engineer-service/service-engineer.service';

@Component({
  selector: 'app-average-time-taken-per-severity',
  templateUrl: './average-time-taken-per-severity.component.html',
  styleUrls: ['./average-time-taken-per-severity.component.css']
})
export class AverageTimeTakenPerSeverityComponent implements OnInit {

  public Statistics:any;

  constructor(private _serviceEngineerService:ServiceEngineerService) { }

  ngOnInit() {
    this._serviceEngineerService.getStatsOfSeverity().subscribe(
      (data) => {
        this.Statistics = data;
      }
    );
  }

}
