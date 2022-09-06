class palettePicker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const thisVal = this.getAttribute("value");
    this.shadowRoot.innerHTML = `${paletteCompStyles.join("")}
    <article id="pal-main">
      <h4>${paletteTitles[thisVal]}</h4>
      <div class="palettes">
        ${renderColors(thisVal)}
      </div>
    </article>`;

    updateColor(this.shadowRoot.querySelectorAll("input"));
  }
  /*
  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback() {}
  render() { this.afterRender(); }
  afterRender() {}
  setState(newState) {this.state(newState);}
  */
}

customElements.define("palette-picker", palettePicker);

function renderColors(thisVal) {
  let colors = "";
  for (let i = 0; i < 5; i++) {
    colors += `<input type="color" id="${thisVal}-col${i + 1}" value="#${
      localTheme.palettes[thisVal]["col" + (i + 1)]
    }" />`;
  }
  return colors;
}

function updateColor(inputs) {
  let themeObj = localTheme;
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      themeObj["palettes"][inputs[i].id.substring(0, 4)][
        inputs[i].id.slice(-4)
      ] = inputs[i].value.substring(1);

      updateStorage(themeObj);
    });
  }
}
