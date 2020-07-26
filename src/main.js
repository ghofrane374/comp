import React from "react";
import FullName from "./profile/FullName";
import Adress from "./profile/Adress";
import ProfilPhoto from "./profile/ProfilPhoto";
import "./App.css";
export default function Main() {
  return (
    <div>
      <FullName />
      <Adress />
      <ProfilPhoto />
    </div>
  );
}
