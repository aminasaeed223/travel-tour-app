import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import Destinationdata from "./Destinationdata";

import "./destination.css";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot within a time frame.</p>

      <Destinationdata
        className="first-des"
        heading="Taal Volcano, Bantages"
        text="Taal Volcano, located on Luzon Island in the Philippines, is one of the country’s most active volcanoes and a popular tourist destination. It is unique due to its stunning landscape, featuring a large caldera filled with a picturesque lake and several small islands, including the island within Taal Lake itself. The volcano is known for its explosive eruptions, with its most recent significant activity occurring in January 2020. Taal's scenic beauty, with lush greenery surrounding the lake and dramatic views from various vantage points, attracts hikers, photographers, and nature lovers, making it a captivating spot for exploration and adventure."
        img1={Mountain1}
        img2={Mountain2}
      />

      <Destinationdata
        className="first-des-reverse"
        heading="Mt. Daguldul, Bantages"
        text="Mount Daguldul, located in Batangas, Philippines, is a captivating destination known for its lush landscapes and stunning views. Rising to about 670 meters, it offers a moderate hiking trail that attracts both beginners and experienced trekkers. The journey to the summit reveals diverse flora and fauna, making it a haven for nature enthusiasts. Hikers are rewarded with panoramic vistas of Batangas Bay, neighboring islands, and the distant Mindoro Mountain range. The mountain is also rich in cultural significance, often visited by locals for spiritual retreats. Its serene environment and breathtaking scenery make Mt. Daguldul a must-visit for adventure seekers."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
}

export default Destination;
