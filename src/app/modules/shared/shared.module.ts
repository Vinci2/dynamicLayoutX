import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableContainerComponent } from './containers/resizable-container/resizable-container.component';

const components = [ResizableContainerComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
