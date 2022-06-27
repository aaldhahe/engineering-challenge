import { AreaAndIntersectOpt, AreaOpt, GraphicHashMapAndLayer } from "helpers/interfaces";
import Graphic from "@arcgis/core/Graphic";
import { intersectionZoneSymbol } from "../symbol";
import GeometryOnMap from "../geometry/GeometryOnMap";
import Constants from "helpers/constants";

export default class SketchEvents {
    //#region private fields
    private noFlyLayer!: __esri.GraphicsLayer;
    private sketchLayer!: __esri.GraphicsLayer;
    private intersectionMap!: Map<__esri.Graphic, __esri.Graphic>;
    //#endregion

    //#region Constants
    public static readonly CREATE: string = 'create';
    public static readonly UPDATE: string = 'update';
    public static readonly STATE_COMPLETE: string = 'complete';
    public static readonly STATE_START: string = 'start';
    //#endregion

    //#region constructor
    constructor (noFlyLayer: __esri.GraphicsLayer, sketchLayer: __esri.GraphicsLayer, intersectionMap: Map<__esri.Graphic, __esri.Graphic>) {
        this.noFlyLayer = noFlyLayer;
        this.sketchLayer = sketchLayer;
        this.intersectionMap = intersectionMap;
    }
    //#endregion
    
    //#region Sketch Create
    sketchCreate = async (event: __esri.SketchCreateEvent): Promise<AreaAndIntersectOpt> => {
        const index = this.sketchLayer.graphics.length - 1; // intersection shape will be at this index
        console.log(`index: `, index);
        console.log(this.sketchLayer.graphics);
        let area: AreaOpt = {
            geodesic: '',
            planar: ''
        };
        let intersection = false;
        this.noFlyLayer.graphics.forEach(graphic => {
            const geometry = GeometryOnMap.intersects(graphic.geometry, event.graphic.geometry);
            if (geometry) {
                // This code can be improved to handle geometries array as well, but for sake of this 
                // challenge we know it will only have one geometry intersection
                intersection = true;
                area = GeometryOnMap.geodesicAndPlanarAreas(geometry);
                const graphic = new Graphic({
                    geometry: geometry,
                    symbol: intersectionZoneSymbol
                });
                this.intersectionMap.set(event.graphic, graphic);
                this.sketchLayer.add(graphic);
            }
        });

        return {
            geodesic: area.geodesic,
            planar: area.planar,
            intersect: intersection
        }
    }
    //#endregion

    //#region Sketch Update
    sketchUpdate = async (event: __esri.SketchUpdateEvent): Promise<AreaAndIntersectOpt> => {
        // Based on extra credit ideas, assuming we are updating the intersection 
        let graphicForLayerAndHashMap!: GraphicHashMapAndLayer;
        if (this.intersectionMap.size > 0) {
            graphicForLayerAndHashMap = this.determineCorrespondingIntersectionShape(event.graphics);
        }
        
        // while we move the shape around, check
        if (graphicForLayerAndHashMap && graphicForLayerAndHashMap.hashMap) {
            this.removeIntersectionShape(graphicForLayerAndHashMap.layer, graphicForLayerAndHashMap.hashMap);
        }
        
        if (event.state === SketchEvents.STATE_COMPLETE) {

        }
        return {} as AreaAndIntersectOpt;
    }
    //#endregion

    removeIntersectionShape = (removeFromLayer: __esri.Graphic, removeFromHashMap: __esri.Graphic): void => {
        this.sketchLayer.remove(removeFromLayer);
        this.intersectionMap.delete(removeFromHashMap);
    }

    determineCorrespondingIntersectionShape(graphics: __esri.Graphic[]): GraphicHashMapAndLayer {
        let graphicForLayerAndHashMap!: GraphicHashMapAndLayer;
        for (let i = 0; i < graphics.length; i++) {
            const graphic = this.intersectionMap.get(graphics[i]);
            if (graphic) {
                graphicForLayerAndHashMap.layer = graphics[i];
                graphicForLayerAndHashMap.hashMap = graphic;
                break;
            } 
        }
        return graphicForLayerAndHashMap;
    }
}
