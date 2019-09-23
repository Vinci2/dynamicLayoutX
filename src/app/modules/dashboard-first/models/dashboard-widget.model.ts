export interface DashboardWidget {
  height: number;
  width: number;
  position: number;
  widgetType: string;
}

export interface WidgetsSet {
  [key: string]: DashboardWidget;
}
