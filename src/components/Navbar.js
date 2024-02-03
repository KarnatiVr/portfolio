import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar d-flex justify-content-between">
      <div className="nav--title p-3">
        <h3>V.</h3>
      </div>
      <div className="nav--items">
        <div class="d-flex flex-col mt-1">
          <div class="nav--item p-3">Home</div>
          <div class="nav--item p-3">About</div>
          <div class="nav--item p-3">Skills</div>
          <div class="nav--item p-3">Projects</div>
        </div>
      </div>
      <div className="d-flex flex-col contact--links p-4">
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-whatsapp"></ion-icon>
      </div>
    </div>
  );
};

export default Navbar;
