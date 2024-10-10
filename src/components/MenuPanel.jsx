import React from "react";
import { MdSearch, MdHomeFilled } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from "./Playlists";
import './css/menupanel.css'

export default function MenuPanel() {
  return (
    <div className="menupanel">
      <div className="topp">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </div>
  );
}


