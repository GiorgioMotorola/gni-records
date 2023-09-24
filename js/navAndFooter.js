function includeNavAndFooter() {
  const nav = document.createElement("nav");
  nav.innerHTML = `     
    <nav id="navbar">
    <div class="logo">
      <img
        class="icon"
        src="./img/rekkid.png"
        alt=""
        style="background-color: #e85a4f"
      />
      GNI RECORDS
    </div>
    <ul class="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label
        for="checkbox_toggle"
        class="hamburger"
        style="background-color: #e85a4f"
        >&#9776;</label
      >
      <div class="menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="/">Stock</a></li>
        <li><a href="/">Stop By</a></li>
      </div>
    </ul>
  </nav>
      `;

  const footer = document.createElement("footer");
  footer.innerHTML = `       
          <h4>&copy; 2023 GNI Records.</h4>
      `;

  document.body.insertBefore(nav, document.body.firstChild);
  document.body.appendChild(footer);
}

includeNavAndFooter();
