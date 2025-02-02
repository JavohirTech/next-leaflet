import React from 'react'
import Link from "next/link";
import {BUY_ME_A_COFFEE_URL} from "@/constants/urls";

export const Footer = () => {
  return (
      <div>
        <div className={"my-container"}>
          <div className="flex justify-between items-center">
            <h3 className="text-lg">Support me</h3>
            <div>
              <Link target={"_blank"} href={BUY_ME_A_COFFEE_URL}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg flex items-center gap-2">
                ☕ Buy Me a Coffee
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}
