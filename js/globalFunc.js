let localTheme,themeGen={fonts:{h1:{family:"",weight:"",size:""},h2:{family:"",weight:"",size:""},p1:{family:"",weight:"",size:""},p2:{family:"",weight:"",size:""}},palettes:{pal1:{col1:"01153a",col2:"04a777",col3:"7a73ff",col4:"fb3640",col5:"ffc857"},pal2:{col1:"01153a",col2:"04a777",col3:"7a73ff",col4:"fb3640",col5:"ffc857"},pal3:{col1:"eeeeee",col2:"dddddd",col3:"cccccc",col4:"bbbbbb",col5:"ffffff"},pal4:{col1:"000000",col2:"222222",col3:"444444",col4:"666666",col5:"888888"}}};function updateStorage(e){window.localStorage.setItem("themeGen",JSON.stringify(e))}function toggleClass(e){e.classList.toggle("Active")}window.localStorage.getItem("themeGen")||window.localStorage.setItem("themeGen",JSON.stringify(themeGen)),localTheme=JSON.parse(localStorage.getItem("themeGen"));