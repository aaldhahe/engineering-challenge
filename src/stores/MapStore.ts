import { action, makeObservable, observable } from 'mobx';
import RootStore from './RootStore';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Sketch from '@arcgis/core/widgets/Sketch';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import Polygon from '@arcgis/core/geometry/Polygon';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import Geometry from "@arcgis/core/geometry/Geometry";
import Color from "@arcgis/core/color";
import SketchOnMap from '../helpers/sketch/SketchOnMap';
import { sketchOptions } from '../helpers/sketch';
import { noFlyZoneSymbol, noFlyZoneGeometry } from '../helpers';
import SketchEvents from '../helpers/sketch/SketchEvents';

export default class MapStore {
  rootStore: RootStore;
  map!: __esri.Map;
  noFlyLayer!: __esri.GraphicsLayer;
  sketchLayer!: __esri.GraphicsLayer;
  sketch!: SketchOnMap;
  sketchState!: string;
  intersects!: boolean;
  canFlyStatus!: string;
  intersectionGeoArea!: string;
  intersectionPlanArea!: string;
  sketchEvents!: SketchEvents;

  constructor(rootStore: RootStore) {
    // HINT: you can add additional observable properties to this class
    // https://mobx.js.org/observable-state.html
    makeObservable(this, 
      { 
        sketchState: observable, setSketchState: action, 
        canFlyStatus: observable, setCanFlyMessage: action,
        intersectionGeoArea: observable, setIntersectionGeoArea: action,
        intersectionPlanArea: observable, setIntersectionPlanArea: action
      });
    this.rootStore = rootStore;
    this.setSketchState('idle');
  }

  setSketchState(state: string) {
    this.sketchState = state;
  }

  setIntersectionGeoArea(state: string) {
    this.intersectionGeoArea = state;
  }

  setIntersectionPlanArea(state: string) {
    this.intersectionPlanArea = state;
  }

  setCanFlyMessage(intersect: boolean) {
    if (!intersect) {
      this.canFlyStatus = `Approved`;
      return;
    }
    this.canFlyStatus = `Denied`;
  }

  constructMap(container: string) {
    this.sketchLayer = new GraphicsLayer();
    this.noFlyLayer = new GraphicsLayer();

    // Define a symbol
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html
    const symbol = noFlyZoneSymbol;

    // Construct map graphic
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html
    this.noFlyLayer.add(
      new Graphic({
        geometry: new Polygon(noFlyZoneGeometry),
        symbol,
      })
    );

    // Create the map and add the graphics layer
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html
    this.map = new ArcGISMap({
      basemap: 'streets-vector',
      layers: [this.noFlyLayer, this.sketchLayer],
    });

    // Set the map view, including location and zoom level
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
    const view = new MapView({
      map: this.map,
      container,
      center: [-83.35447311401367, 42.23982914405], // Longitude, latitude
      zoom: 11,
    });

    // When the view finishes loading, add the sketch widget
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html
    view.when(() => {
      this.sketch = new SketchOnMap(
        sketchOptions(view, this.sketchLayer)
      );

      this.sketchEvents = new SketchEvents(this.noFlyLayer, this.sketchLayer);
      this.sketch.addUI(view, 'top-right');
      this.sketch.setEvents('create', this.sketchCreate);
      this.sketch.setEvents('update', this.sketchUpdate);
    });
  }

  sketchUpdate = async (event: __esri.SketchUpdateEvent) => {
    console.log('update: ', event);
    this.setSketchState(event.state);
  }

  sketchCreate = async (event: __esri.SketchCreateEvent) => {
    // Debug Statement
    this.setSketchState(event.state);
    if (event.state !== 'complete') return;
    else {
        const areaOpt = await this.sketchEvents.sketchCreate(event);
        this.setIntersectionGeoArea(`${areaOpt.geoArea}`);
        this.setIntersectionPlanArea(`${areaOpt.planArea}`);
        this.setCanFlyMessage(areaOpt.intersect);
    }

    // THERE ARE 3 STEPS TO SATISFYING THE BASE REQUIREMENTS FOR THE CHALLENGE
    // STEP 1: determine if the sketch's graphic intersects with the graphic in the noFlyLayer
    // STEP 2: if it intersects, compute the area of the intersection, and display it
    // STEP 3: create a new graphic with any possible intersection, and display it on the map

    // HINT: the event has a graphic property which has a geometry property
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html

    // HINT: you can use getItemAt to access one of the graphics of the noFlyLayer.
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html#getItemAt
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html

    // HINT: you can use the geometry engine to calculate the intersection of two geometries
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html#intersect

    // HINT: you can use the geometry engine to calculate area of a polygon
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html#geodesicArea

    // HINT: you can create a graphic using a Graphic object
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#symbol

    // HINT: you can provide a symbol when creating this graphic to change its appearance
    // https://developers.arcgis.com/javascript/latest/sample-code/playground/live/index.html#/config=symbols/2d/SimpleFillSymbol.json

    // HINT: you can add a new Graphic to this.sketchLayer to display it on the map
    // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#add
  };

  cleanup() {
    // Todo, remove any listeners
    this.sketch.destroy();
    this.setSketchState('idle');
  }
}
