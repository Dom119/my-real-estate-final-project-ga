import React from "react";
import { StyledFooter } from "../styles/LandingPage.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <i class="material-icons">facebook</i>{" "}
        <i class="material-icons">domain</i>{" "}
        <i class="material-icons">whatsapp</i>{" "}
        <i class="material-icons">public</i> <i class="material-icons">poll</i>{" "}
        <i class="material-icons">search</i>{" "}
      </div>
      <div>
        <p>Advertise</p>
        <p>Contact</p>
        <p>Media</p>
        <p>Legal</p>
        <p>Careers</p>
        <p>Map</p>
      </div>
    </StyledFooter>
  );
}
