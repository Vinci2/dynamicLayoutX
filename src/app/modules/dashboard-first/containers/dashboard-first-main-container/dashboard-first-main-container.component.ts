import { Component, OnInit } from '@angular/core';
import { DashboardWidget } from '../../models/dashboard-widget.model';

@Component({
  selector: 'app-dashboard-first-main-container',
  templateUrl: './dashboard-first-main-container.component.html',
  styleUrls: ['./dashboard-first-main-container.component.scss']
})
export class DashboardFirstMainContainerComponent implements OnInit {
  public elementsList: DashboardWidget[] = [
    { height: 100, width: 100, widgetType: '1', position: 0 },
    { height: 200, width: 200, widgetType: '2', position: 1 },
    { height: 200, width: 200, widgetType: '3', position: 2 },
    { height: 200, width: 200, widgetType: '4', position: 3 },
    { height: 200, width: 200, widgetType: '5', position: 4 },
    { height: 200, width: 200, widgetType: '6', position: 5 }
  ];

  constructor() {}

  ngOnInit() {}
}
