const url=window.location.href.includes("pages")?"../":"";function header(){const e=document.createElement("header"),t=document.createElement("a");t.setAttribute("href",`${url}index.html`);const n=document.createElement("h1"),o=document.createTextNode("Styles generator");t.appendChild(n),n.appendChild(o),e.appendChild(t);const a=document.createElement("nav");e.appendChild(a);return["theme","content","button","checkbox"].forEach((e=>{const t=document.createElement("a"),n=document.createTextNode(e);t.appendChild(n),t.setAttribute("href",`${url?"":"pages/"}${e}.html`),window.location.href.includes(e)&&t.setAttribute("class","active"),a.appendChild(t)})),e.outerHTML}const template=document.createElement("template");template.innerHTML=header();const styles=["global","header"];class Header extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),styles.forEach((e=>{let t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href",`${url}styles/${e}.css`),this.shadowRoot.appendChild(t)})),this.shadowRoot.appendChild(template.content.cloneNode(!0))}}window.customElements.define("header-comp",Header);
