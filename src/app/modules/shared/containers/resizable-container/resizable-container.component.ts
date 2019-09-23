import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResizableContainerSize } from './resizable-container.models';

@Component({
  selector: 'app-resizable-container',
  templateUrl: './resizable-container.component.html',
  styleUrls: ['./resizable-container.component.scss']
})
export class ResizableContainerComponent {
  @Input() containerHeight: number;
  @Input() containerWidth: number;
  @Input() units = 'px';

  @Output() newSize = new EventEmitter<ResizableContainerSize>();

  private resizeStartingPoint = { x: null, y: null };

  private tempContainerHeight: number;
  private tempContainerWidth: number;

  private onMouseMoveHandler;
  private onResizeStopHandler;

  public onResizeStart(event: MouseEvent): void {
    this.resizeStartingPoint.x = event.screenX;
    this.resizeStartingPoint.y = event.screenY;

    this.onMouseMoveHandler = this.onMouseMove.bind(this);
    this.onResizeStopHandler = this.onResizeStop.bind(this);
    this.tempContainerHeight = this.containerHeight;
    this.tempContainerWidth = this.containerWidth;

    document.addEventListener('mousemove', this.onMouseMoveHandler);
    document.addEventListener('mouseup', this.onResizeStopHandler);
  }

  private onMouseMove(event: MouseEvent): void {
    const xDelta = event.screenX - this.resizeStartingPoint.x;
    const yDelta = event.screenY - this.resizeStartingPoint.y;
    this.containerWidth = xDelta + this.tempContainerWidth;
    this.containerHeight = yDelta + this.tempContainerHeight;
  }

  private onResizeStop(): void {
    document.removeEventListener('mousemove', this.onMouseMoveHandler);
    document.removeEventListener('mouseup', this.onResizeStop);

    this.newSize.emit({height: this.containerHeight, width: this.containerWidth});
  }
}
