import React from 'react';
import {GITHUB_REPO_URL} from "@/constants/urls";
import Link from "next/link";
import GithubIcon from "../../../public/icons/GithubIcon";

export const Navbar = () => {
  return (
      <div>
        <div className={"my-container"}>
          <div className="flex justify-between items-center">
            <div className="text-xl">Next-Leaflet</div>
            <div>
              <Link href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">
                <GithubIcon/>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};