import React from "react";
import "../styles/LocationMap.css"; // Arquivo para estilização

const LocationMap = () => {
  const address = "Rua da R. Algarve, 400 - São Francisco, Belo Horizonte - MG";

  // URL de incorporação do OpenStreetMap (não precisa de API)
  // Os parâmetros definem a área (bbox) e a posição do marcador (marker)
  const mapUrl =
    "http://www.openstreetmap.org/export/embed.html?bbox=-43.95729,-19.87845,-43.95373,-19.87625&layer=mapnik&marker=-19.87735,-43.95551";

  // URL para o botão "Ver no OpenStreetMap"
  const externalMapUrl =
    "http://www.openstreetmap.org/?mlat=-19.87735&mlon=-43.95551#map=18/-19.87735/-43.95551";

  return (
    <section id="map-location" className="map-container">
      <div className="map-header">
        <h2 className="map-title">Nossa Localização</h2>
        <p className="map-address">{address}</p>
      </div>
      <div className="map-wrapper">
        <iframe
          title="Localização no OpenStreetMap"
          width="100%"
          height="450"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={mapUrl}
          style={{ border: "1px solid black" }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="map-footer">
        <a
          href={externalMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          Ver Rota
        </a>
      </div>
    </section>
  );
};

export default LocationMap;