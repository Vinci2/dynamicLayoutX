import { Component, OnInit } from '@angular/core';
import { DashboardWidget } from '../../models/dashboard-widget.model';

@Component({
  selector: 'app-dashboard-first-main-container',
  templateUrl: './dashboard-first-main-container.component.html',
  styleUrls: ['./dashboard-first-main-container.component.scss']
})
export class DashboardFirstMainContainerComponent implements OnInit {
  public elementsList: DashboardWidget[] = [
    { height: '100px', width: '100px', widgetType: '1', position: 0 },
    { height: '12rem', width: '12rem', widgetType: '2', position: 1 },
    { height: '10rem', width: '15rem', widgetType: '3', position: 2 },
    { height: '20rem', width: '10rem', widgetType: '4', position: 3 },
    { height: '30rem', width: '30rem', widgetType: '5', position: 4 },
    { height: '30rem', width: '100%', widgetType: '6', position: 5 }
  ];

  private startPosition = { x: null, y: null };
  private baseSize = { x: 100, y: 100 };
  private endFlag = false;

  constructor() {}

  public onChangeSize() {
    // this.elementsList = this.elementsList.map((widgetData: DashboardWidget, index: number) => {
    //   if (!index) {
    //     const widthValue = widgetData.width.split('rem')[0];
    //     const newValue = parseInt(widthValue, 10) + 1 + 'rem';
    //     return { ...widgetData, width: newValue };
    //   }
    //   return widgetData;
    // });
  }

  public startCounting(event: MouseEvent) {
    console.log('START EVENT: ', event);
    this.startPosition.x = event.screenX;
    this.startPosition.y = event.screenY;

    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', event => {
      console.log('MOUSE UP ', event);
      this.endFlag = true;
    });
  }

  public stopCounting(event) {
    console.log('STOP Event: ', event);
  }

  private onMouseMove(event: MouseEvent) {
    if (this.endFlag) {
      return;
    }

    console.log('this: ', this);

    const x = event.screenX - this.startPosition.x;
    const y = event.screenY - this.startPosition.y;

    console.log('------------------');
    console.log('MOVE BY X: ', x);
    console.log('MOVE BY Y: ', y);

    console.log('------------------');


    this.elementsList = this.updateFirstElement(x, y);

    console.log('move: ', event);
    console.log('move this: ', this);
  }

  private updateFirstElement(x: number, y: number) {
    const firstElement = this.elementsList[0];
    const currentX = parseInt(firstElement.width.split('px')[0], 10);
    const currentY = parseInt(firstElement.height.split('px')[0], 10);

    const newWidth = x + this.baseSize.x + 'px';
    const newHeight = y + this.baseSize.y + 'px';
    console.log('------------------------');
    console.log('currentX: ', currentX);
    console.log('currentY: ', currentY);


    console.log('newWidth: ', newWidth);
    console.log('newHeight: ', newHeight);
    console.log('------------------------');

    return this.elementsList.map((widgetData: DashboardWidget, index: number) => {
      if (!index) {
        return { ...widgetData, width: newWidth, height: newHeight };
      }
      return { ...widgetData };
    });
  }

  ngOnInit() {}
}
