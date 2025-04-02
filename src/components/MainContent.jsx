import locations from "../data.json";

export default function MainContent() {
  return (
    <main>
      <section className="locations">
        {locations.map((loc) => (
          <article key={loc.name} className="location-card">
            <figure className="location-image">
              <img
                className="location-img"
                src={loc.image}
                alt={`Image of ${loc.name}, ${loc.country}`}
              />
            </figure>
            <div className="location-content">
              <div className="location-info">
                <img
                  className="location-marker"
                  src="/images/marker.png"
                  alt="Location marker"
                />
                <span>{loc.country}</span>
                <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </div>
              <h1>{loc.name}</h1>
              <p className="location-date">{loc.date}</p>
              <p className="location-description">{loc.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
