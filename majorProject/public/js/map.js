
  
  maptilersdk.config.apiKey = mapToken;


  const map = new maptilersdk.Map({
    container: "map", // container's id or the HTML element to render the map
    style: maptilersdk.MapStyle.STREETS, // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 10.68, // starting zoom
  });

  const el = document.createElement("div");
  el.innerHTML =
    '<i class="fa-solid fa-location-dot fa-bounce" style="color: #fb0404;"></i>'; // Font Awesome icon
  el.style.fontSize = "40px"; // size of icon
 
 

const marker = new maptilersdk.Marker({ element: el })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new maptilersdk.Popup().setHTML(
   `<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`
  ))
  .addTo(map);