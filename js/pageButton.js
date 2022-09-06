//Content
function changeBContent(value) {
  btn.textContent = value;
}

//Get code
let active = false;
let importFam, importWeight, codeFinal;
function getCode() {
  if (active) return;
  active = true;
  let code = `<style>
        ${
          importFam
            ? `@import url('https://fonts.googleapis.com/css2?family=${importFam}${
                importWeight &&
                importWeight !== "bolder" &&
                importWeight !== "normal"
                  ? `:wght@${importWeight}`
                  : ""
              }&display=swap');`
            : ""
        }
        button {
            border: none;
            min-width: 110px;
            min-height: 36px;
            cursor: pointer;
            padding: 5px 10px;
            ${btn.getAttribute("style")}
        }
    </style>
    <button>${btn.textContent}</button>`;

  let btnSubmit = document.getElementById("Submit");
  btnSubmit.classList.add("Clicked");
  setTimeout(function () {
    btnSubmit.classList.remove("Clicked");
    active = false;
  }, 1500);

  navigator.clipboard.writeText(code);
  makeDocument(code);
  codeFinal = code;
}

function applyColor(color, type, ele) {
  const btn = document.querySelector("#btn");

  if (type === "Text") btn.style.color = `#${color}`;
  else btn.style.backgroundColor = `#${color}`;

  ele
    .getRootNode()
    .querySelector("#colorPicker").style.backgroundColor = `#${color}`;
}

function applyFont(font, ele) {
  const btn = document.querySelector("#btn");
  const fontBtn = ele.getRootNode().querySelector("#themeFonts");
  const weights = ele.getRootNode().querySelector("#fontWeight");

  fontBtn.style.fontFamily = `${FONTS[font].family}`;
  fontBtn.innerHTML = `${FONTS[font].family}`;

  btn.style.fontFamily = FONTS[font].family;
  importFam = FONTS[font].family.replace(" ", "+");

  renderWeigths(FONTS[font], weights);
}

function applyWeight(ele) {
  const weights = ele.parentElement.querySelectorAll("button");
  weights.forEach((btn) => {
    btn.classList.remove("Active");
  });

  ele.classList.add("Active");

  const btn = document.querySelector("#btn");
  btn.style.fontWeight = ele.value;
  importWeight = ele.value;

  if (importFam && importWeight !== "bolder" && importWeight !== "normal") {
    const newWeight = `<style>@import url("https://fonts.googleapis.com/css2?family=${importFam}:wght@${importWeight}&display=swap")</style>`;
    let editImports = [...document.querySelector("#importStyles").childNodes]
      .filter((font) => !font.innerHTML.includes(importFam.replace(" ", "+")))
      .map((domEle) => domEle.outerHTML);

    document.querySelector("#importStyles").innerHTML = [
      ...editImports,
      newWeight,
    ].join("");
  }
}

function makeDocument(code) {
  let doc = document.implementation.createHTMLDocument("buttonTest");

  try {
    doc.body.innerHTML = code;
  } catch (e) {
    console.log(e);
  }

  console.log(doc);
}
