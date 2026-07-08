'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

const benefits = [
  {
    emoji: '👁️',
    title: 'Maximum Visibility',
    description: 'Your business in front of thousands of American travelers actively planning their visit to Valle de Guadalupe.',
  },
  {
    emoji: '📊',
    title: 'Real Leads',
    description: 'Track every WhatsApp message, website visit, and reservation request that comes directly from our platform.',
  },
  {
    emoji: '🗺️',
    title: 'On the Map',
    description: 'Appear on our interactive route map and in curated itineraries that travelers use to plan their perfect day.',
  },
]

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Get started and claim your listing',
    features: [
      'Business profile page',
      'Contact buttons (WhatsApp, website)',
      'Listed in directory',
      'Basic analytics',
    ],
    cta: 'Get Listed Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 'Coming Soon',
    description: 'For businesses ready to grow',
    features: [
      'Everything in Basic',
      'Featured placement',
      'Priority in search results',
      'Advanced analytics',
      'Appear in itineraries',
    ],
    cta: 'Notify Me',
    highlight: true,
  },
  {
    name: 'Premium',
    price: 'Coming Soon',
    description: 'Maximum exposure and tools',
    features: [
      'Everything in Pro',
      'Homepage featured section',
      'Custom itinerary creation',
      'Dedicated account manager',
      'Monthly performance report',
    ],
    cta: 'Notify Me',
    highlight: false,
  },
]

const businessTypes = [
  'Winery',
  'Restaurant',
  'Hotel / B&B',
  'Tour Operator',
  'Spa / Wellness',
  'Other',
]

export default function ForBusinessesPage() {
  const [form, setForm] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    business_type: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!form.business_name || !form.email) return
    setStatus('loading')
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          place_id: 'new-business',
          type: 'form',
          source: 'business',
          ...form,
        }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6]">

      {/* Hero */}
      <div className="bg-wine-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
            For Business Owners
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white leading-tight">
            Reach Thousands of Wine Country Travelers
          </h1>
          <p className="text-stone-300 text-lg leading-relaxed">
            Join the platform American travelers use to discover and plan their visit to Valle de Guadalupe.
          </p>
          <Button
            href="#get-listed"
            variant="secondary"
            className="text-base px-8 py-3 mt-2"
          >
            Get Listed Today →
          </Button>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl text-stone-900">
            Why join Ruta del Vino?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-8 shadow-sm border border-stone-100 flex flex-col gap-3 text-center"
            >
              <span className="text-5xl">{benefit.emoji}</span>
              <h3 className="font-heading font-semibold text-xl text-stone-900">
                {benefit.title}
              </h3>
              <p className="text-stone-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-stone-900">
              Simple, transparent pricing
            </h2>
            <p className="text-stone-500 mt-2">Start free, grow when you&apos;re ready</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-8 flex flex-col gap-4 border ${
                  plan.highlight
                    ? 'bg-wine-900 border-wine-700 shadow-lg'
                    : 'bg-white border-stone-100 shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full self-start">
                    MOST POPULAR
                  </span>
                )}
                <div>
                  <h3 className={`font-heading font-bold text-2xl ${plan.highlight ? 'text-white' : 'text-stone-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-3xl font-bold mt-1 ${plan.highlight ? 'text-gold-400' : 'text-wine-500'}`}>
                    {plan.price}
                  </p>
                  <p className={`text-sm mt-1 ${plan.highlight ? 'text-stone-300' : 'text-stone-500'}`}>
                    {plan.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`text-sm flex items-start gap-2 ${plan.highlight ? 'text-stone-300' : 'text-stone-600'}`}>
                      <span className="text-gold-400 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="#get-listed"
                  variant={plan.highlight ? 'secondary' : 'outline'}
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div id="get-listed" className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 flex flex-col gap-6">
          <div className="text-center">
            <h2 className="font-heading font-bold text-3xl text-stone-900">
              List your business
            </h2>
            <p className="text-stone-500 mt-2">
              Fill out the form and We&apos;ll be in touch within 24 hours
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-8 flex flex-col items-center gap-3">
              <span className="text-5xl">🍷</span>
              <h3 className="font-heading font-semibold text-xl text-stone-900">
                Thank you!
              </h3>
              <p className="text-stone-500">
                We received your information and will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-700">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={form.business_name}
                    onChange={(e) => setForm({ ...form, business_name: e.target.value })}
                    placeholder="Adobe Guadalupe"
                    className="border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-wine-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-700">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    value={form.contact_name}
                    onChange={(e) => setForm({ ...form, contact_name: e.target.value })}
                    placeholder="Juan García"
                    className="border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-wine-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="hola@minegocio.com"
                    className="border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-wine-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-stone-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+52 646 000 0000"
                    className="border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-wine-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-stone-700">
                  Business Type
                </label>
                <select
                  value={form.business_type}
                  onChange={(e) => setForm({ ...form, business_type: e.target.value })}
                  className="border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-wine-500 transition-colors bg-white"
                >
                  <option value="">Select type...</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-stone-700">
                  Message (optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your business..."
                  rows={3}
                  className="border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-wine-500 transition-colors resize-none"
                />
              </div>

              <Button
                onClick={handleSubmit}
                variant="primary"
                className="w-full justify-center py-3 text-base"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Submit →'}
              </Button>

              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}

            </div>
          )}
        </div>
      </div>

    </div>
  )
}