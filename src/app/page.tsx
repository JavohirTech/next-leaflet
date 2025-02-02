"use client"
import React from 'react'
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map/Map"), {ssr: false});

const Page = () => {
  return (
      <div>
        <div className={"my-container"}>
          <Map/>
          <div>
            <h1 className={"text-2xl font-bold"}>
              Next.js Leaflet Map with Multiple Tile Layers
            </h1>
            <p className={"text-lg mt-4"}>
              This project demonstrates how to integrate Leaflet with Next.js to create an interactive map that supports
              multiple tile layers. The example includes:

              Setting up Leaflet in a Next.js environment
              Adding a dynamic map component
              Switching between multiple tile layers (e.g., OpenStreetMap, Google Maps, Satellite, etc.)
              Customizing the map with markers, popups, and other interactive features
              This implementation ensures optimal performance by handling map rendering efficiently in a Next.js
              application.
            </p>
          </div>
        </div>
      </div>
  )
}
export default Page
