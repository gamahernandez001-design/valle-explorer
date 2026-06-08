import Button from '@/components/ui/Button'

export default function ForBusinessesBanner() {
  return (
    <section className="bg-wine-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
          For Business Owners
        </p>

        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
          Own a business in Valle de Guadalupe?
        </h2>

        <p className="text-stone-300 text-lg max-w-2xl leading-relaxed">
          Join our platform and connect with thousands of American travelers planning their visit to Baja wine country.
        </p>

        <Button
          href="/en/for-businesses"
          variant="secondary"
          className="text-base px-8 py-3"
        >
          Get Listed →
        </Button>

      </div>
    </section>
  )
}