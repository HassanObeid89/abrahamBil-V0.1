import benefits from '../data/benefits.json'
import BenefitCard from './BenefitCard'
export default function BenefitSection() {
    const Benefits = benefits.map((benefit,index)=><BenefitCard benefit={benefit} key={index}/>)
  return (
    <div className='benefits'>
        <hr/>
        <ul>{Benefits}</ul>
    </div>
  )
}
