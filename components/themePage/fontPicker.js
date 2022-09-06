class FontPicker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    //this.state = {};
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `${fontsCompStyles.join("")}
    <article id="font-main">
      <h4>${fontTitles[this.getAttribute("value")]}</h4>
      <div class="fontSelector">
        ${addButton(this.getAttribute("value"))}
        <div class="List" id="List">
          <div id="Btns" class="Btns">${fontPickerList}</div>
          ${fontsCompImgs.join("")}
        </div>
      </div>
    </article>`;

    const component = this.shadowRoot
      .querySelector("article")
      .getBoundingClientRect();

    if (window.innerHeight - component.top < 350)
      this.shadowRoot.querySelector("#List").classList.add("Upward");
  }
}

customElements.define("font-picker", FontPicker);

//FUNCTIONS
//OnClick font get its attributes
function getFont(i, doc) {
  let themeObj = localTheme;

  const Picker = doc.getRootNode().querySelector("#Picker");
  Picker.style.fontFamily = `"${FONTS[i].family}", sans-serif`;
  Picker.innerHTML = FONTS[i].family;
  themeObj.fonts[doc.getRootNode().host.getAttribute("value")].family = i;

  importFonts();

  Picker.classList.remove("Active");
  updateStorage(themeObj);
}

//OnMount assign font to drop down button
function addButton(ele) {
  const isNum = typeof localTheme.fonts[ele].family === "number" ? true : false;
  return `<button class="fontsPicker" id="Picker" onclick="toggleClass(this)" style="font-family:${
    isNum ? FONTS[localTheme.fonts[ele].family].family + "," : ""
  } sans-serif">${
    isNum ? FONTS[localTheme.fonts[ele].family].family : "Pick a Font"
  }</button>`;
}
