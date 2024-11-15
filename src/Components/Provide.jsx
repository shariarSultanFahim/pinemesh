import { Check } from 'lucide-react'
import provideImg from '../assets/provide.png'
import frame2 from '../assets/Frame2.png'

export default function ServicesSection() {
  const services = [
    {
      title: "Personalized routine",
      description: "",
      highlighted: false
    },
    {
      title: "Follow-up after completing courses",
      description: "",
      highlighted: false
    },
    {
      title: "Access to additional resources",
      description: "We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.",
      highlighted: true
    },
    {
      title: "Free community support",
      description: "",
      highlighted: false
    }
  ]

  return (
    <section className="py-16 bg-white max-w-screen-xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">We provide...</h2>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`mt-1 flex-shrink-0 rounded-full p-1 ${
                    service.highlighted ? 'bg-violet-100 text-violet-600' : 'bg-gray-100'
                  }`}>
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">{service.title}</h3>
                    {service.description && (
                      <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className="border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-medium mt-4 py-2 px-4 rounded-full">
                <h1>Learn More About Our Services</h1>
            </button>
          </div>

          <div className="relative md:w-[600px] md:h-[600px] ">
            <div className='object-center w-full h-full overflow-hidden rounded-2xl'>
                <img
                src={provideImg}
                alt="People enjoying our services"
                className="w-full h-full rounded-lg shadow-lg object-cover object-center"
                />
            </div>
            <div className="absolute top-16 -left-6">
              <img className='h-14 w-14' src={frame2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}