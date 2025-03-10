export default function Entry({
  img: { src, alt },
  title,
  country,
  googleMapsLink,
  dates,
  text,
}) {
  return (
    <>
      <section className="entry-container">
        <div className="photo-container">
          <img src={src} alt={alt} className="entry-image" />
        </div>
        <div className="info-container">
          <div className="country-and-coords">
            <i className="fa-solid fa-location-dot"></i>
            <h3>{country}</h3>
            <a href={googleMapsLink} target="_blank">
              View on Google maps
            </a>
          </div>
          <h2 className="location-name">{title}</h2>
          <p className="dates">{dates}</p>
          <p className="description">{text}</p>
        </div>
      </section>
    </>
  );
}
