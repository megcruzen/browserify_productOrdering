const nav = {
    createNav() {
        let navContainer = document.querySelector("#navigation");

        let logo = document.createElement("div");
        logo.setAttribute("class", "logo");
        logo.innerHTML = "<a href='#'>Betsy's Boutique</a>"

        let spacer = document.createElement("div");

        let navLinks = document.createElement("div");
        navLinks.setAttribute("class", "navlinks");
        navLinks.innerHTML = `<ul>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Log Out</a></li>
            </ul>`;

        navContainer.appendChild(logo);
        navContainer.appendChild(spacer);
        navContainer.appendChild(navLinks);

    }
}

export default nav;