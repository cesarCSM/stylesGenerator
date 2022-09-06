const url = window.location.href.includes("pages") ? "../" : "";

function header() {
  //Header
  const header = document.createElement("header");

  //H1
  const aLink = document.createElement("a");
  aLink.setAttribute("href", `${url}index.html`);

  const h1 = document.createElement("h1");
  const h1cont = document.createTextNode("Styles generator");

  aLink.appendChild(h1);
  h1.appendChild(h1cont);
  header.appendChild(aLink);

  //Nav
  const nav = document.createElement("nav");
  header.appendChild(nav);

  //Pages nav theme
  const navBar = ["theme", "button"];

  navBar.forEach((page) => {
    const node = document.createElement("a");
    const nodeCont = document.createTextNode(page);

    node.appendChild(nodeCont);
    node.setAttribute("href", `${url ? "" : "pages/"}${page}.html`);

    if (window.location.href.includes(page))
      node.setAttribute("class", "active");

    nav.appendChild(node);
  });

  return header.outerHTML;
}

//Header
const template = document.createElement("template");
template.innerHTML = header();

//Styles
const styles = ["global", "header"];

//Constructor
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    styles.forEach((style) => {
      let css = document.createElement("link");
      css.setAttribute("rel", "stylesheet");
      css.setAttribute("href", `${url}styles/${style}.css`);
      this.shadowRoot.appendChild(css);
    });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("header-comp", Header);
