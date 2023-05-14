import React from 'react'
import Header from '../Header'
import Image from 'next/image'

function page() {
    return (
        <div className='flex-col w-full h-fit]'>

            <Header />

            <div className='flex flex-col w-full self-center justify-center items-center bg-[url("/Image.jpg")]'>
                <div className='divider divider-vertical'><h1>About us!</h1></div>
                <div className="card w-2/3 bg-base-100 shadow-xl image-full">
                    <figure><Image src="/travel.jpg" alt="Shoes" fill className='rounded-xl' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">A new beginning!</h2>
                        <p>Our company is a proud and young, full of passion and compasion.</p>
                        <p>We offer transport services for business and individuals inside and outside of the UK.
                            We do this through our own passion for driving for long period of times with our vans.
                            Our office is open 9-5 from 08:00 am to 15:00 pm UTC.
                        </p>

                    </div>
                </div>
                <div className='divider divider-vertical'><h1>Company Goal!</h1></div>
                <div className="card w-2/3 bg-base-100 shadow-xl image-full">
                    <figure><Image src="/cover.jpg" alt="Goal" fill className='rounded-xl' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Purpose!</h2>
                        <p>
                            Our goal is to create a diverse and unified workforce and expand throughout the entire Europe!
                        </p>
                        <p> We believe that perseverence is key in succeded on the current market, and we are willing to risk it
                            if it means going out there and offering a high quality delivery service, afterall, a happy customer
                            is a happy business.
                        </p>
                        <p>

                        </p>
                    </div>
                </div>
                <div className='divider divider-vertical'><h1>Our past!</h1></div>
                <div className="card w-2/3 bg-base-100 shadow-xl image-full">
                    <div className="card-body">
                        <h2 className="card-title">Price!</h2>
                        <p>Our prices differ based off of a variety of factors from distance, to public road availability and much more.</p>
                        <p>We offer a great range of prices and at the moment we cannot offer an estimate online,
                            however, we can offer you a quote by dialing our contact number from Monday to Friday 08:00 am to 15:00 pm
                            UTC or leaving a message explaining your idea!
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider bg-slate-400'></div>
            <div className="hero min-h-screen bg-[url('/handshake.jpg')]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Contact</h1>
                        <p className="mb-5">If you decided to entrust us with your packaging you can contact us on at +447869821167. See you soon.   </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='divider bg-slate-400'></div>
            <footer className="footer footer-center p-10 bg-gray-600 text-primary-content">
                <div>
                    <p className="font-bold">
                        ZMEU TRANPORT LTD. <br />Providing reliable transport services since 2022
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default page