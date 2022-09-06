class colorPicker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const thisVal = this.getAttribute("value");
    this.shadowRoot.innerHTML = `
    ${colorCompStyles.join("")}
    <div id="${thisVal}Color" class="colorComp">
      <label>${thisVal} color:</label>
      <button id="colorPicker" class="fullWidthBtn" onclick="toggleClass(this)"></button>
      <div id="colorsDiv">
        <label>${thisVal} color:</label>
        ${renderColors(thisVal)}
        <div>
          <h4>Other color</h4>
          <input id="colorPickerInput" type="color" value="#ffffff" />
        </div>
      </div>
    </div>`;

    this.shadowRoot
      .querySelector("#colorPickerInput")
      .addEventListener("input", function () {
        applyColor(this.value.substring(1), thisVal, this);
      });
  }
}

customElements.define("color-picker", colorPicker);

function renderColors(type) {
  let palette = [];
  let colors = [];

  Object.entries(localTheme.palettes).forEach(([key, value]) => {
    colors = [];
    Object.entries(value).forEach(([colKey, colValue]) => {
      colors.push(
        `<button onclick="applyColor('${colValue}', '${type}', this)" style="background-color: #${colValue}"></button>`
      );
    });
    colors = colors.join("");
    palette.push(
      `<div><h4>${paletteTitles[key]}</h4><span>${colors}</span></div>`
    );
  });
  palette = palette.join("");

  return palette;
}
