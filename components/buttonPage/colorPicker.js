class colorPicker extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const o=this.getAttribute("value");window.location.href.includes("button")&&colorCompStyles.splice(2,1),this.shadowRoot.innerHTML=`${colorCompStyles.join("")}\n    <div id="${o}Color" class="colorComp">\n      <label>${o} color:</label>\n      <button id="colorPicker" class="fullWidthBtn" onclick="toggleClass(this)"></button>\n      <div id="colorsDiv">\n        <label>${o} color:</label>\n        ${renderColors(o)}\n        <div>\n          <h4>Other color</h4>\n          <input id="colorPickerInput" type="color" value="#ffffff" />\n        </div>\n      </div>\n    </div>`,this.shadowRoot.querySelector("#colorPickerInput").addEventListener("input",(function(){applyColor(this.value.substring(1),o,this)}))}}function renderColors(o){let t=[],e=[];return Object.entries(localTheme.palettes).forEach((([l,n])=>{e=[],Object.entries(n).forEach((([t,l])=>{e.push(`<button onclick="applyColor('${l}', '${o}', this)" style="background-color: #${l}"></button>`)})),e=e.join(""),t.push(`<div><h4>${paletteTitles[l]}</h4><span>${e}</span></div>`)})),t=t.join(""),t}customElements.define("color-picker",colorPicker);