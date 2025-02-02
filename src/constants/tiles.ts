import {MapTiles} from "@/types/mapTiles";

export const mapTiles: MapTiles[] = [
  {
    name: 'Google Hybrid',
    url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',
  },
  {
    name: 'Open Street Map',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'Google Satellite',
    url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}',
  },
  {
    name: 'Google Terrain',
    url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
  },
  {
    name: 'Yandex',
    url: 'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=3.573.0&x={x}&y={y}&z={z}&scale=1',
  },
  {
    name: 'Google Streets',
    url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}',
  },
  {
    name: 'Google Dark',
    url: 'http://mt0.google.com/vt/lyrs=h&hl=en&x={x}&y={y}&z={z}',
  }
];
