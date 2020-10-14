import Leaflet from "leaflet";

import mapMarkerImg from "../images/map_marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [40, 47],
  iconAnchor: [20, 47],

  popupAnchor: [160, 10],
});

export default mapIcon;
