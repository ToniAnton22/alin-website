import Header from "./Header";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="z-10 w-full items-center flex-col justify-between font-mono text-sm lg:flex">
          <div className="hero min-h-screen" style={{ backgroundImage: `url("/background.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Zmeu LTD</h1>
                <p className="mb-5 text-2xl font-serif text-">You call, we deliver!</p>
              </div>
            </div>
          </div>
          <div className="divider divider-vertical px-24">AND</div>
          <div className='flex-col w-full px-24 pb-20'>
            <div className="flex flex-col lg:flex-row">
              <div className="flex w-1/2 self-start sm:w-full">
                <div className="card w-fit bg-base-100 shadow-xl flex-row">
                  <figure><Image src="/delivery.jpg" alt="Going UP" width={540} height={540} /></figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      High aspirations!
                    </h2>
                    <p>We at Zmeu Tranport, always strive to go above and beyond!</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Transport</div>
                      <div className="badge badge-outline">Products</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider divider-vertical lg:divider-horizontal"></div>
              <div className="flex w-full justify-end sm:w-full">
                <div className="card w-full bg-base-100 shadow-xl flex-row">
                  <div className="card-body">
                    <h2 className="card-title">
                      Want a delivery done right?
                    </h2>
                    <p>Its simple, just give us a call or an email at the details given below. Tell us the details and we will do the rest! </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider divider-vertical">HERE</div>
            <div className="flex w-full justify-end">
                <div className="card w-full bg-base-100 shadow-xl flex-row">
                  <div className="card-body">
                    <h2 className="card-title text-2xl font-sans">
                      Want to do busniess with us?
                    </h2>
                    <p>
                      Just ring us at (+447869821167 outside of the United Kingdom) and we will discuss the details with you! 
                      <br/>
                      You can also leave a voice message with your name and request and we will be in touch with you as soon as possible. 
                      Our services are currently available in the UK but they can be requested from France and Belgium but we are looking to expand our horizon.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </main>
      <footer className="footer footer-center p-10 bg-gray-600 text-primary-content">
        <div>
          <p className="font-bold">
            ZMEU TRANPORT LTD. <br />Providing reliable transport services from 2022
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </>
  )
}
