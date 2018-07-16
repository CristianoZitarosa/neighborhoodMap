export const getMarkerInfo = (marker, infowindow) => {

  let request = `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${marker.name}&limit=1`;

  fetch(request)
  .then(
    function (response) {
      if (response.status !== 200) {
        infowindow.setContent(`An error occurred trying to reach ${request}.`);
        return;
      }

      response.json().then( (data) => {
        if(data[2].length) {
          let information = `<strong class="marker-title">${data[0]}</strong>
          <p class="marker-info">${data[2][0]}</p>
          <a href="${data[3][0]}" target="_blank" class="marker-link">Open in Wikipedia</a>`;
          infowindow.setContent(information);
        } else {infowindow.setContent('There is no content on Wikipedia for this place')};
      });
    }
  ).catch(function (err) {
    infowindow.setContent("Loading data from API failed", err);
  });

}
