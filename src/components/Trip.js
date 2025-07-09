import "./trip.css";
import Tripdata from "./tripdata";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Tours</h1>
      <p>Discover your unique destinations using Google Maps.</p>
      <div className="tripcard">
        <Tripdata
          image={Trip1}
          heading="Trip in Indonesia"
          text="Explore Indonesia’s diverse landscapes, from Bali’s beaches to Java’s volcanoes. Experience vibrant culture, delicious cuisine, and lush jungles. Discover unique wildlife and breathtaking scenery on this unforgettable adventure."
        />
        <Tripdata
          image={Trip2}
          heading="Trip in Malaysia"
          text="Discover Malaysia's stunning landscapes, from the vibrant streets of Kuala Lumpur to the serene beaches of Langkawi. Enjoy diverse cuisine, explore lush rainforests, and experience rich cultural heritage throughout your journey."
        />
        <Tripdata
          image={Trip3}
          heading="Trip in Japan"
          text="Experience Japan's unique blend of tradition and modernity. Explore Tokyo's bustling streets, Kyoto's historic temples, and serene gardens. Savor delicious cuisine, visit iconic landmarks, and immerse yourself in rich culture."
        />
      </div>
    </div>
  );
}
export default Trip;
