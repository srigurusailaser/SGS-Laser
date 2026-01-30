import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { images } from '../assets/image-mapping'

const Privacy = () => {
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
          <h1 className="text-primary text-[2.2rem] font-bold mb-5 text-center">Privacy Policy</h1>
          
          <div className="bg-gray-50 p-5 rounded-xl mb-8 border-l-4 border-primary">
            <p><strong>Effective Date:</strong> 17-09-2025</p>
            <p><strong>Website:</strong> <a href="https://sgslaser.in" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">sgslaser.in</a></p>
            <p><strong>Business Name:</strong> Sri Guru Sai Laser</p>
          </div>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-bottom-2 border-secondary inline-block border-b-2 border-secondary">1. Information We Collect</h2>
            <p className="text-justify mb-4">We may collect the following personal information when you use our website or services:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name, contact details (email, phone number, address)</li>
              <li>Payment details (processed securely through third-party gateways)</li>
              <li>Appointment and service preferences</li>
              <li>Information collected via cookies and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">2. How We Use Your Information</h2>
            <p className="text-justify mb-4">Your data may be used for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Providing and improving our services</li>
              <li>Managing bookings and payments</li>
              <li>Sending confirmations, reminders, or promotional offers (with your consent)</li>
              <li>Ensuring compliance with applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">3. Sharing of Information</h2>
            <p className="text-justify">We do not sell or rent personal data to third parties. We may share information with trusted third-party service providers (e.g., payment gateways, IT support) only for business purposes. Information may be disclosed if required by law, regulation, or court order.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">4. Cookies & Tracking</h2>
            <p className="text-justify">Our website may use cookies to enhance user experience, remember preferences, and analyse site traffic. You may disable cookies in your browser settings, but certain features may not function properly.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">5. Data Security</h2>
            <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-secondary">
              <p className="text-justify">We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">6. Your Rights (As per Indian Data Protection Laws)</h2>
            <p className="text-justify mb-4">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access, update, or correct your personal information</li>
              <li>Request deletion of your personal data, subject to legal obligations</li>
              <li>Opt-out of marketing communications at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">7. Data Retention</h2>
            <p className="text-justify">We retain personal data only for as long as necessary to provide services, comply with legal obligations, and resolve disputes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-primary text-xl font-bold mb-4 pb-1 border-b-2 border-secondary inline-block">8. Changes to Privacy Policy</h2>
            <p className="text-justify">We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised "Effective Date."</p>
          </section>

          <div className="bg-primary text-white p-6 rounded-xl space-y-2">
            <h3 className="text-xl font-bold mb-4">9. Contact Us</h3>
            <p>For any privacy-related queries, please contact:</p>
            <p><strong>Sri Guru Sai Laser</strong></p>
            <p><strong>Business Address:</strong> <a href="https://maps.app.goo.gl/uEsAJgvhY2aRFrNN8?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:text-secondary hover:underline transition-all">#02, Narmada Layout, 2nd Cross, Opp.gardn City University Parking, Kithignur Main Road, Bengaluru</a></p>
            <p><strong>Email ID:</strong> srigurusailaser@gmail.com</p>
            <p><strong>WhatsApp number:</strong> +91 7411026612</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
