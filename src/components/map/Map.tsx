import React, {useState} from 'react'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L, {LatLngTuple} from "leaflet";
import "leaflet/dist/leaflet.css";
import {locations} from "@/constants/locations";
import {mapTiles} from "@/constants/tiles";

const Map = () => {
  const icon = L.icon({
    iconUrl: "/icons/marker.png",
    iconSize: [50, 50]
  });
  const [selectedTile, setSelectedTile] = useState<string>(mapTiles[0].url);

  const changeTile = (tile: string) => {
    setSelectedTile(tile);
  };

  return (
      <div>
        <MapContainer
            className={"w-full h-[50vh] rounded-3xl"}
            center={locations[0].location as LatLngTuple}
            zoom={9}
            minZoom={13}
            scrollWheelZoom={false}
        >
          <TileLayer
              url={selectedTile}
          />
          {
            locations.map((location, index) => (
                <Marker key={index} position={location.location as LatLngTuple} icon={icon}>
                  <Popup>
                    {location.name}
                  </Popup>
                </Marker>
            ))
          }
        </MapContainer>

        <div className={"justify-center my-4"}>
          <h1 className={"text-md font-bold mb-2"}>Select a map tile</h1>
          <div className={"flex flex-wrap gap-2"}>
            {
              mapTiles.map((tile, index) => (
                  <button
                      key={index}
                      onClick={() => changeTile(tile.url)}
                      className={`px-4 py-2 rounded-md ${selectedTile === tile.url ? "bg-black dark:bg-white text-white dark:text-black" : "dark:text-white"}`}
                  >
                    {tile.name}
                  </button>
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default Map