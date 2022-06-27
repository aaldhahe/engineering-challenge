import Polygon from "@arcgis/core/geometry/Polygon";
import { AreaAndIntersectOpt } from "helpers/interfaces";
import { intersect, geodesicArea, planarArea } from '@arcgis/core/geometry/geometryEngine';
import Graphic from "@arcgis/core/Graphic";
import Geometry from "@arcgis/core/geometry/Geometry";
import { intersectionZoneSymbol } from "../symbol";

export default class SketchEvents {
    private noFlyLayer!: __esri.GraphicsLayer;
    private sketchLayer!: __esri.GraphicsLayer;

    constructor (noFlyLayer: __esri.GraphicsLayer, sketchLayer: __esri.GraphicsLayer) {
        this.noFlyLayer = noFlyLayer;
        this.sketchLayer = sketchLayer;
    }
    
    sketchCreate = async (event: __esri.SketchCreateEvent): Promise<AreaAndIntersectOpt> => {
        let geoArea = '', planArea = '', intersection = false;
        this.noFlyLayer.graphics.forEach(graphic => {
            let geometry = intersect(graphic.geometry, event.graphic.geometry);
            intersection = geometry ? true : false;
            if (intersection) {
                // This code can be improved to handle geometries array as well, but for sake of this 
                // challenge we know it will only have one geometry intersection
                if (!Array.isArray(geometry)) {
                    geoArea = geodesicArea(new Polygon(geometry), 'square-kilometers').toFixed(2);
                    planArea = planarArea(new Polygon(geometry), 'square-kilometers').toFixed(2);
                }
                this.sketchLayer.add(new Graphic({
                    geometry: geometry as Geometry,
                    symbol: intersectionZoneSymbol
                }))
            }
        });

        return {
            geoArea: geoArea,
            planArea: planArea,
            intersect: intersection
        }
    }
}