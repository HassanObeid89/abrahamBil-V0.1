import aboutUs from "../assets/images/aboutUs.png";
export default function AboutUs() {
  return (
    <div className="aboutUs">
      <img src={aboutUs} alt="" />
      <article>
        <h1>SÄLJ DITT FORDON SNABBT, ENKELT och TRYGGT!</h1>
        <span>DET SJÄLVKLARA VALET!</span>
        <p>
          Vi köper alla typer och märken av begagnade fordon. Våra
          grundvärderingar är Kunskap, Ansvar och Trygghet! Vårt mål är att bli
          det självklara valet när du ska sälja ditt fordon!
        </p>
      </article>
    </div>
  );
}
