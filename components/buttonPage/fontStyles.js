class fontStyles extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link href="" rel="stylesheet">
      ${colorCompStyles.join("")}
      <div id="FontStyles">
        <label>Font styles:</label>
        <button id="themeFonts" class="fullWidthBtn" onclick="toggleClass(this)" style="font-family:sans-serif">Sans-serif</button>
        <div id="fontWeight">
          ${renderWeigths()}
        </div>
        <div id="fontsDiv">
          ${renderFonts()}
          <div>
            <a href="../../pages/theme.html">← Edit fonts</a>
          </div>
        </div>
      </div>`;
  }
}

customElements.define("font-styles", fontStyles);

function renderFonts() {
  let fonts = [];
  Object.entries(localTheme.fonts).forEach(([key, value]) => {
    let button =
      value.family === ""
        ? `<p class="legal">No font selected...</p>`
        : `<button onclick="applyFont('${
            value.family
          }', this)" class="fullWidthBtn" style="font-family:'${
            FONTS[value.family].family
          }', sans-serif">${FONTS[value.family].family}</button>`;

    fonts.push(`<div><h4>${fontTitles[key]}</h4>${button}</div>`);
  });

  fonts = fonts.join("");
  return fonts;
}

function renderWeigths(font, divWeights) {
  const btns = ["light", "regular", "bold"];
  let divs = [];

  if (!font) {
    for (let i = 0; i < btns.length; i++) {
      divs.push(
        `<button ${
          btns[i] === "regular" ? 'class="Active" ' : ""
        } onclick="applyWeight(this)" value="${btns[i]
          .replace("light", "lighter")
          .replace("regular", "normal")
          .replace("bold", "bolder")}">${btns[i]}</btn>`
      );
    }

    divs = divs.join("");
    return divs;
  } else {
    let fonts = font.variants.filter((fontVar) => {
      if (!fontVar.includes("italic")) return fontVar;
    });

    if (fonts.length > 3)
      fonts = [fonts[0], fonts[~~(fonts.length / 2)], fonts[fonts.length - 1]];

    if (fonts.length === 1) fonts = ["normal", "bolder"];

    for (let i = fonts.length === 3 ? 0 : 1; i < btns.length; i++) {
      divs.push(
        `<button ${
          i === 1 ? 'class="Active" ' : ""
        } onclick="applyWeight(this)" value="${
          fonts[fonts.length === 3 ? i : i - 1]
        }">${btns[i]}</btn>`
      );
    }

    divs = divs.join("");
    divWeights.innerHTML = divs;
  }
}
