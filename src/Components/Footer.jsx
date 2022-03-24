import React from "react";

const currDay = new Date();
const year = currDay.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}
export default Footer;
