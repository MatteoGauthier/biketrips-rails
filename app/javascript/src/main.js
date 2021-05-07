function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    console.log("string not valid");
    return false;
  }
  console.log("string valid");
  return true;
}

document.addEventListener("DOMContentLoaded", (event) => {
  //the event occurred
  var notyf = new Notyf();

  document.querySelector(".path-field").addEventListener(
    "change",
    (e) => {
      if (!IsJsonString(e.target.value)) {
        // Display an error notification

        notyf.error({
          message: `Le champ "path" n'est pas valide (le contenu doit être du geojson)`,
          duration: 9000,
          icon: false,
        });
        return;
      }
      let distance = 0;
      const geojsonData = JSON.parse(e.target.value);
      console.log(geojsonData);

      geojsonData.features.map((feature) => {
        feature.geometry.coordinates.map((coords) => {
          console.log(coords[0]);
        });
      });

      // var from = turf.point([-75.343, 39.984]);
      // var to = turf.point([-75.534, 39.123]);
      // var options = { units: "miles" };

      // var distance = turf.distance(from, to, options);
    },

    false
  );
});
