import Color from "@arcgis/core/Color";
import Geometry from "@arcgis/core/geometry/Geometry";

export interface Outline {
    color: string;
    width: number;
}

export interface Symbols {
    type: string;
    color: __esri.Color;
    style: string;
    outline: Outline;
}

export interface AreaAndIntersectOpt {
    geoArea: number | string;
    planArea: number | string;
    intersect: boolean;
}