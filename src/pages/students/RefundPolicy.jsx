import React from 'react'
import Footer from '../../components/students/Footer';


function Terms_condition() {
  return (
    <>
      <div class="max-w-4xl mx-auto p-6 pt-6 bg-white shadow-[0px_0px_20px_rgba(10,10,10,0.2)] rounded-lg mt-25">
        <h1 class="text-3xl font-bold text-center text-violet-800">Refund and Returns Policy</h1>

        <div class="mt-4 space-y-6">
          <section>
            <h2 class="text-xl font-semibold text-gray-900">1. Return Policy</h2>
            <p>
              At Padhaai ki Dukaan, we are committed to providing our valued customers with high-quality books and stationery. If you are not entirely satisfied with your purchase, we’re here to help.
            </p>
            <ul className='ml-6'>
              <li>
                <h2 className='mt-4 font-semibold'>1.1. Eligibility for Returns</h2>
                <ul class="list-disc ml-6" >
                  <li>You may initiate a return within 15 days of receiving the product.</li>
                  <li>To be eligible for a return, your item must be unused and in the same condition that you received it.</li>
                  <li>It must also be in the original packaging.</li>
                </ul>
              </li>
              <li>
                <h2 className='mt-4 font-semibold'>1.2. Non-Eligible Items</h2>
                <p>Certain items are not eligible for returns, including:</p>
                <ul class="list-disc ml-6" >
                  <li>Gift cards</li>
                  <li>Downloadable software products</li>
                  <li>
                    Personalized or customized items
                  </li>
                </ul>
              </li>
              <li>
                <h2 className='mt-4 font-semibold'>1.3. Return Process</h2>
                <p>To initiate a return, please follow these steps:</p>
                <ul class="list-decimal ml-6" >
                  <li>Contact our customer support team at info@mypkd.co.in to request a return authorization.</li>
                  <li>Our team will guide you through the return process and provide you with a return authorization code.</li>
                  <li>
                    Pack the item securely, include the original invoice, and clearly mark the return authorization code on the package.
                  </li>
                  <li>Ship the item to the address provided by our customer support team.</li>
                </ul>
              </li>
              <li>
                <h2 className='mt-4 font-semibold'>1.4. Refunds</h2>
                <p>Once we receive your returned item, our team will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>
                <ul class="list-disc ml-6" >
                  <li>If your return is approved, we will initiate a refund to your original payment method.</li>
                  <li>You will receive the credit within a certain number of days, depending on your card issuer’s policies.</li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <h2 class="text-xl font-semibold text-gray-900">2. Refund Policy</h2>
            
            <ul className='ml-6'>
              <li>
                <h2 className='mt-4 font-semibold'>2.1. Damaged or Defective Items</h2>
                <p>If you receive a damaged or defective item, please contact us immediately at info@mypkd.co.in. We will arrange for a replacement or a refund, depending on your preference.</p>
              </li>
              <li>
                <h2 className='mt-4 font-semibold'>2.2. Cancellation of Orders</h2>
                <p>If you wish to cancel an order, please contact us as soon as possible. We will make every effort to accommodate your request. If the order has already been shipped, you may need to follow the return process outlined in Section 1.</p>
                
              </li>
              <li>
                <h2 className='mt-4 font-semibold'>2.3. Late or Missing Refunds</h2>
                <p>If you haven’t received a refund yet, please check your bank account or contact your credit card company, as it may take some time before your refund is officially posted.</p>
                <p>
                If you’ve done all of this and you still have not received your refund, please contact us at info@mypkd.co.in.
                </p>
              </li>
              
            </ul>
          </section>
          
      
          <section>
            <p>If you have any questions about our return and refund policy, please contact us at:</p>
            <p>Email: <a href="mailto:pkdarena@mypkd.co.in" class="text-blue-600">pkdarena@mypkd.co.in</a></p>
            <p>Phone: <span class="text-blue-600">+91 9263883729</span></p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Terms_condition

