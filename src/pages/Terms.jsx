import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { images } from '../assets/image-mapping'

const Terms = () => {
  return (
    <div className="bg-background min-h-screen font-inter">
      <div className="bg-primary py-5 text-center flex flex-col items-center">
        <p className="flex items-center gap-2 text-white text-xl font-bold mb-2">
          <img src={images.logos.sgs} alt="Sri Guru Sai Laser" className="h-[60px] w-auto" />
          Sri Guru Sai Laser
        </p>
        <Link to="/" className="text-white flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <div className="max-w-[800px] mx-auto py-10 px-5">
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <h1 className="text-primary text-[2.2rem] font-bold mb-5 text-center">Terms & Conditions</h1>
          
          <div className="bg-gray-50 p-5 rounded-xl mb-8 border-l-4 border-primary">
            <p><strong>Effective Date:</strong> 17-09-2025</p>
            <p><strong>Website:</strong> <a href="https://sgslaser.in" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">sgslaser.in</a></p>
            <p><strong>Business Name:</strong> Sri Guru Sai Laser</p>
          </div>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">1. Acceptance of Terms</h2>
            <p className="text-justify">By accessing or using our website and services, you agree to abide by these Terms & Conditions. If you do not agree, please discontinue use of our services immediately.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">2. Services Provided</h2>
            <p className="text-justify mb-4">Sri Guru Sai Laser offers Acrylic Laser Cutting and Eco Solvent prints based services, including but not limited to Acrylic Cutting & Engraving like:</p>
            <div className="bg-gray-50 p-5 rounded-xl mb-4">
              <p className="text-sm">House Name Plates (Acrylic, Titanium, SS), LED Sign Boards (1D, 2D, 3D, Glow boards), Rubber Stamps, Digital Prints & UV Prints, Acrylic with UV print, Hand Made Key Chains, Eco Solvent Prints, Vinyl With Lamination, Vinyl With Sun board, Fabric Banner, Banner prints, Sunpac with UV prints, Plotter Cutting, Vinyl Cutting, Frosted film Cutting, Mug printing.</p>
            </div>
            <p className="text-justify">All services are subject to availability, professional discretion, and compliance with applicable Indian laws.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">3. User Responsibilities</h2>
            <p className="text-justify">You agree to provide accurate, complete, and updated personal information. You are responsible for maintaining confidentiality of your account details (if applicable). You shall not misuse our services for unlawful, harmful, or fraudulent purposes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">4. Appointments, Payments & Pricing</h2>
            <p className="text-justify">All bookings are subject to confirmation by Sri Guru Sai Laser. Prices may vary and are subject to change without prior notice. Payments must be made in accordance with the payment terms displayed on our website or communicated at the time of booking. We may use third-party payment gateways, and you agree to comply with their terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">5. Cancellation & Refund Policy</h2>
            <p className="text-justify">Cancellations must be requested at least 24 hours before the scheduled appointment. Refunds, if applicable, will be processed in accordance with our internal policy and may take 7–10 business days. No refunds will be issued for services already rendered.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">6. Intellectual Property Rights</h2>
            <p className="text-justify">All content on this website, including text, images, graphics, logos, and service descriptions, are the intellectual property of Sri Guru Sai Laser. You may not copy, reproduce, distribute, or use our content without prior written consent.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">7. Limitation of Liability</h2>
            <p className="text-justify">While we take utmost care in delivering services, Sri Guru Sai Laser shall not be held liable for any indirect, incidental, or consequential damages arising from use of our services. Results may vary depending on individual circumstances. To the maximum extent permitted by law, our liability is limited to the amount paid for the service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">8. Governing Law & Jurisdiction</h2>
            <p className="text-justify">These Terms & Conditions shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Bengaluru.</p>
          </section>

          <div className="bg-primary text-white p-6 rounded-xl space-y-2">
            <h3 className="text-xl font-bold mb-4">9. Contact Information</h3>
            <p>For any queries regarding these Terms, please contact:</p>
            <p><strong>Sri Guru Sai Laser</strong></p>
            <p><strong>Business Address:</strong> <a href="https://maps.app.goo.gl/uEsAJgvhY2aRFrNN8?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:text-secondary hover:underline transition-all">#02, Narmada Layout, 2nd Cross, Opposite Garden City University Parking, Kithignur Main Road, Bengaluru</a></p>
            <p><strong>Email ID:</strong> srigurusailaser@gmail.com</p>
            <p><strong>WhatsApp number:</strong> +91 7411026612</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
