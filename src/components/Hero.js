import "./herostyle.css";
// import heroImage from "../assets/12.jpg";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="heroimg" />
      </div>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btn}>
          {props.buttonText}
        </a>
      </div>
    </>
  );
}
export default Hero;
