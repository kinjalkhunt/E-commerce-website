import React from 'react'
import aboutus1 from '../Assets/Images/imgee/aboutus1.png'
import './Company.css'

export default function Company() {
  return (
    <div>
        <div>
        <header className='header'>
            <h1>About us</h1>
            <p>We help your business thrive with transformative software devlopment</p>
        </header>
        </div>
        <section className='section'>
            <div>
                <img src={aboutus1} alt='about1'/>
            </div>
            <div className='script'>
                <p>Having a strong presence in India and in the global arena too, WeeTech Solution Pvt Ltd is one of the major players in the IT consulting niche. Our IT consulting team stands unparalleled in experience and this is indeed our biggest strength. We offer full scale IT consulting and services to our clients ensuring that they gain maxim from our expertise, analysis and strategies. As the Best IT Company in Surat, WeeTech Solution boasts a formidable presence both locally in India and on the global stage</p>
                <p>We are proud of the fact that our clients count on us for providing them with the support that they need to bring in possible changes and to deal with the uncertainty that the business holds and this adds to that zeal to offer them services that would bring in major transformation in their business model. Our team has worked across more than 20-30 industry sectors and this is what places us in a comfortable position to deliver you measurable support and services.</p>
                <p>We are here to maximize our clients approach towards IT by providing them with simple, effectual and result driven support and services. From start to finish, we have all the services that you need touching all the platforms, web, mobile, cloud and consulting.</p>
                <p>WeeTech Solution Pvt Ltd is out there with that solitary goal of delivering robust, practicable and scalable solutions and services to our clients at the most competitive pricing respecting even stringiest possible deadlines.</p>

            </div>
        </section>
        <hr></hr>
        <section className='section2'>
            <h1>Our Core Service Values- Define Us Better</h1>
            <p>With that longstanding commitment to deliver excellence, we strive hard to respect the changes that time brings and this helps us come out with something innovative each time.</p>
            <p>Our success story stands concrete on the pillars or integrity, respect, excellence, constant learning, experience and delivery.</p>
            <p>For us, the way we serve you matters more than anything and this is why ensure that the client’s goals are comprehended in best possible way so that our services act helpful.</p>
        </section>
    </div>
  )
}
