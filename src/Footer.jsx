import React from "react";

function Footer() {
  const currentyear1 = new Date().getFullYear();
  return (
    <footer>
      {" "}
      <p>copyrigth by @{currentyear1}</p>
    </footer>
  );
}
export default Footer;
