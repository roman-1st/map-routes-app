

export interface Route {
    lat: number;
    lng: number;
}

export type RouteList = Route[];

export interface Routes {
    routes: RouteList[];
}

export interface RoutesState {
    routes: Routes['routes'];
    checkRoute: Route[] | null,
}

export enum RoutesActionType {
    CHECK_ROUTE = "CHECK_ROUTE"
}

export interface checkRoutesAction {
    type: RoutesActionType.CHECK_ROUTE,
    payload: Route[]
}