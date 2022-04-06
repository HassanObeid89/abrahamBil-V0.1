export default function BenefitCard({ benefit }) {
  return (
      
    <li className="benefitCard">
      <i className={benefit.icon}></i>
      <h2>{benefit.title}</h2>
      <p>{benefit.description}</p>
    </li>
  );
}
