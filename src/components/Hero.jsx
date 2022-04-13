import hero from "../assets/images/hero.png";
export default function Hero() {
  return (
    <div className="hero_container">
      <img className="slide-in" src={hero} alt="" />
      <label className="slagen">
        <h1>Sälj Bilen Och Få Betalt Direkt!</h1>
        <span>Vi köper din bil oavsett skick.</span>
        <a href="tel:+46765856630">Ring Oss</a>
      </label>
    </div>
  );
}
