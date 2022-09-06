window.addEventListener("load", () => {
  importFonts();
});

function importFonts() {
  const divStyles = document.querySelector("#importStyles");
  divStyles.innerHTML = "";
  Object.values(localTheme.fonts).forEach((val) => {
    if (typeof val.family !== "number") return;
    divStyles.innerHTML += `<style>@import url("https://fonts.googleapis.com/css?family=${FONTS[
      val.family
    ].family.replace(" ", "+")}");</style>`;
  });
}
