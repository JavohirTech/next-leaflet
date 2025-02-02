"use client"
import React from 'react'
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map/Map"), {ssr: false});

const Page = () => {
  return (
      <div>
        <div className={"my-container"}>
          <h1 className={"text-2xl font-bold mb-5"}>Next-Leaflet with multiple tiles</h1>
          <Map/>
          <hr/>
        </div>
      </div>
  )
}
export default Page
