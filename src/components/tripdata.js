import "./trip.css";

function Tripdata(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default Tripdata;
