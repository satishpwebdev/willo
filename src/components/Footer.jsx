import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className="mt-8 md:mt-16">
            <section className="flex flex-col md:flex-row items-start justify-between mx-4 md:mx-16 mb-4">
               <div className="w-full md:w-1/3 font-mont mb-4 md:mb-0">
                  <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum reprehenderit commodi facilis alias! Reiciendis adipisci, ab qui
                     alias ipsum soluta bvvbivb bjvbiv bivbwivb bwievbwivbwvbi bwovbwivbwov fibvibrviberibveoirbverib  rivbeirbi.
                  </p>
                 
               </div>
               <div className="w-full md:w-1/4 md:ml-12">
                  <h2 className="text-xl text-red-900 font-playfair font-semibold mb-4">ONLINE SHOPPING</h2>
                  <div className="font-mont py-2 md:py-0 flex flex-col gap-2">
                     <h3>Men’s T-Shirts</h3>
                     <h3>Women’s Wear</h3>
                     <h3>Winter Collections</h3>
                     <h3>Hooded T-shirts</h3>
                     <h3>Sweatshirt Collections</h3>
                  </div>
               </div>
               <div className="w-full md:w-1/4 md:ml-4">
                  <h2 className="text-xl text-red-900 font-playfair font-semibold mb-4">CUSTOMER POLICIES</h2>
                  <div className="font-mont py-2 md:py-0 flex flex-col gap-2">
                     <h3>About Us</h3>
                     <h3>Terms and Conditions</h3>
                     <h3>Shipping & Returns Policy</h3>
                     <h3>Cancellation & Returns Policy</h3>
                     <h3>Contact US</h3>
                  </div>
               </div>
               <div className="w-full md:w-1/4 md:ml-4">
                  <h2 className="text-xl text-red-900 font-playfair font-semibold mb-4">STORE INFORMATION</h2>
                  <div className="font-mont py-2 md:py-0 flex flex-col gap-2">
                     <h3>Lorem ipsum dolor sit amet consectetu Quod, error!</h3>
                     <h3>Call Us: 97949494944</h3>
                     <h3>Email Us:</h3>
                  </div>
               </div>
            </section>
            <section className="flex items-center justify-center font-mont">
               <div className="flex items-center h-10 bg-[#20050A] w-full justify-center ">
                  <p className="text-white">2022-2023 Powered By Dummy Team</p>
               </div>
            </section>
         </footer>
   </>
  )
}

export default Footer
