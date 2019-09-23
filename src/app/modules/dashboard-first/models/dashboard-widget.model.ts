export interface DashboardWidget {
  height: string;
  width: string;
  position: number;
  widgetType: string;
}

export interface WidgetsSet {
  [key: string]: DashboardWidget;
}
