import hero_1 from "../assets/images/hero_1.png";
import hero_2 from "../assets/images/hero_2.png";
export default function Hero() {
  return (
    <div className="hero_container">
      <img src={hero_2} alt="" />
      <label className="slagen">
        <h1>Sälj Bilen Och Få Betalt Direkt!</h1>
        <span>Vi köper din bil oavsett skick.</span>
        <a href="+46765856630">Ring Oss</a>
      </label>
    </div>
  );
}
