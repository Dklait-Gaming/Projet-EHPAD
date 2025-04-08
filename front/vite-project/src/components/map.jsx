import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Box, Typography } from "@mui/material";

// Pour l'intégration de la carte interactive
export default function Map() {
  // Paramétrage du marker rouge pour la carte interactive
  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        marginTop: 4,
      }}
    >
      <Box
        sx={{
          height: "400px",
          width: "100%",
          maxWidth: "800px",
          border: "1px solid #ddd",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={[43.01204854791769, -0.09952310243535447]} // Centrage ajusté (latitude moyenne, longitude moyenne)
          zoom={13} // Zoom ajusté pour inclure les 3 EHPADs
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL pour une vue standard OpenStreetMap
            attribution="&copy; OpenStreetMap contributors"
          />
          {/* Ajout des marqueurs */}
          <Marker
            position={[43.009257199627015, -0.09929151429578108]}
            icon={redIcon}
          >
            <Popup>Nous sommes situés ici</Popup>
          </Marker>
          <Marker position={[43.00596604412404, -0.10193079271088232]}>
            <Popup>EHPAD Canarie</Popup>
          </Marker>
          <Marker position={[43.0229224, -0.0973491]}>
            <Popup>EHPAD Ayzac-Ost</Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
}
