import Header from "../components/Header";
import Entry from "../components/Entry";
import data from "./data";
export default function App() {
  console.log(data);
  const destinations = data.map((el) => (
    <Entry
      key={el.id}
      img={el.img}
      title={el.title}
      country={el.country}
      googleMapsLink={el.googleMapsLink}
      dates={el.dates}
      text={el.text}
      // {...el}
    />
  ));
  return (
    <>
      <Header />
      {destinations}
    </>
  );
}
