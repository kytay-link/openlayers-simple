import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {fromLonLat} from 'ol/proj';

const singaporePoint = fromLonLat([103.8198, 1.3521]);

var view = new View({
    center: singaporePoint,
    zoom: 12,
});

var map = new Map({
    layers: [
        new TileLayer({
            source: new OSM(),
        })
    ],
    target: 'map',
    view: view,
});