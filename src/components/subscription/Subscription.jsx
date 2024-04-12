import React from 'react'
import './Subscription.css'
import business from '../../assets/plans/business.png'
import professional from '../../assets/plans/professional.png'
import starter from '../../assets/plans/starter.png'
const Subscription = () => {
    return (
        <div>
            <h2 className="mt-[100px] text-3xl text-center heading-text">Our Subscription Plans 🚀</h2>

            <section className='pricing'>

                <div className="card-wrapper">

                    <div className="card-header">
                        <img src={starter} alt="silver" />
                        <h2 className='text-2xl font-semibold'>Starter</h2>
                    </div>
                    <div className="card-detail">
                        <p><span></span><b></b>Lorem, ipsum dolor.</p>
                        <p><span></span><b></b>Lorem, ipsum dolor.</p>
                        <p><span></span><b></b>Lorem, ipsum dolor sit amet</p>
                        <p><span></span><b></b>Lorem, ipsum dolor.</p>
                        <p><span></span><b>2</b>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="card-price">
                        <p><sup>$</sup>25<sub>per day</sub></p>
                    </div>
                    <button className='card-button'>Try It</button>
                </div>


                <div className="card-wrapper">
                    <div className="card-header">
                        <img src={professional} alt="gold" />
                        <h2 className='text-2xl font-semibold'>Professional</h2>
                    </div>
                    <div className="card-detail">
                        <p><span></span><b></b>Lorem, ipsum dolor.</p>
                        <p><span></span><b></b>Lorem, ipsum dolor.</p>
                        <p><span></span><b></b>Lorem, ipsum dolor sit amet</p>
                        <p><span></span><b></b>Lorem, ipsum dolor.</p>
                        <p><span></span><b>2</b>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="card-price">
                        <p><sup>$</sup>75<sub>per day</sub></p>
                    </div>
                    <button className='card-button'>Try It</button>
                </div>


                <div className="card-wrapper">
                    <div className="card-header">
                        <img src={business} alt="diamond" />
                        <h2 className='text-2xl font-semibold'>Business</h2>
                    </div>
                    <div className="card-detail">
                        <p><span></span><b></b>Lorem, ipsum dolor.</p>
                        <p><span></span><b></b>Lorem, ipsum dolor.</p>
                        <p><span></span><b></b>Lorem, ipsum dolor sit amet</p>
                        <p><span></span><b></b>Lorem, ipsum dolor.</p>
                        <p><span></span><b>2</b>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="card-price">
                        <p><sup>$</sup>150<sub>per day</sub></p>
                    </div>
                    <button className='card-button'>Try It</button>
                </div>
            </section>
        </div>
    )
}

export default Subscription
