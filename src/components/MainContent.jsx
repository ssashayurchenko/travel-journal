const locations = [
  {
    country: "JAPAN",
    name: "Mount Fuji",
    date: "12 Jan, 2023 - 24 Jan, 2023",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    image: "/images/japan.png",
    mapUrl: "https://maps.app.goo.gl/ZTaa2UtcRrYCeuUS8",
  },
  {
    country: "AUSTRALIA",
    name: "Sydney Opera House",
    date: "27 May, 2023 - 8 Jun, 2023",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    image: "/images/australia.png",
    mapUrl: "https://maps.app.goo.gl/JibWQMwupyAUs5dk9",
  },
  {
    country: "NORWAY",
    name: "Geirangerfjord",
    date: "01 Oct, 2024 - 18 Nov, 2024",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    image: "/images/norway.png",
    mapUrl: "https://maps.app.goo.gl/xN4EtVjc73rCpPGm9",
  },
];

export default function MainContent() {
  return (
    <main>
      <section className="locations">
        {locations.map((loc, index) => (
          <article key={index} className="location-card">
            <figure className="location-image">
              <img
                className="location-img"
                src={loc.image}
                alt={`Image of ${loc.name}`}
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
