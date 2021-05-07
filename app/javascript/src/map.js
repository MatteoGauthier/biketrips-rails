let map, lngInput, latInput, range, radius, marker;
var re = new RegExp("\\d+");

var markerIcon = L.icon({
  iconUrl: "/location-pin.svg",

  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

render = () => {
  let path = window.location.pathname;
  let splittedPath = path.split("/");
  let lat, long, mapdiv;
  setUpMap();

  // addViewToMap();
};

function setUpMap() {
  /* let mapContainer = document.querySelector("#map");

  console.log(1);

  if (mapContainer) {
    map = L.map("map");

    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png",
      {
        attribution:
          "Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",
      }
    ).addTo(map);
  } */

  let mapdivs = document.querySelectorAll("#map");
  console.log(mapdivs);

  mapdivs.forEach((element) => {
    let currentMap = L.map(element,{ zoomControl: false });
    L.tileLayer(
        "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
      ).addTo(currentMap);

    const { path, id } = element.dataset;
    let parsedPath = JSON.parse(path);
    let geoJSON = L.geoJson(parsedPath, {}).addTo(currentMap);
    currentMap.fitBounds(geoJSON.getBounds());
  });
}

document.addEventListener("turbolinks:load", render);
document.addEventListener("load", render);
