import { data } from "./data.js";

let numberOfPanels = 8; //패널개수
let panelSize = 300;
let unitAngle = (2 * Math.PI) / numberOfPanels;
let unitRadian = (2 * Math.PI) / numberOfPanels;
let unitDegree = 360 / numberOfPanels;
let loaderElem;
let panelItemElems;
let observerElems;

function setElems() {
  loaderElem = document.querySelector(".loader-wrapper");
  panelItemElems = document.querySelectorAll(".panel-item");
  observerElems = document.querySelectorAll(".observer-ready");
}

function setPanelItems() {
  let halfPanelSize = panelSize / 2;
  let dist = halfPanelSize / Math.tan(unitRadian / 2);
  for (let i = 0; i < panelItemElems.length; i++) {
    panelItemElems[i].style.transform = `rotateY(${
      unitDegree * i
    }deg) translateZ(${dist}px)`;

    panelItemElems[i].style.backgroundColor = data[i].color;
  }
}

window.addEventListener("load", () => {
  setElems();

  loaderElem.addEventListener("transitionend", function (e) {
    e.currentTarget.remove();
    this.remove();
  });

  document.body.classList.remove("before-load");

  setPanelItems();

  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries);
  });

  observerElems.forEach((item, i) => {
    console.log(item);
    console.log(i);
  });
});
