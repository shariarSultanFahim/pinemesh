import bannerImage from '../assets/bannerImage.jpg';
import frame from '../assets/Frame.png'

export default function Banner() {
  return (
    <section className="bg-[#F0F1EE]">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-2 text-sm font-medium">4.9 (566)</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              #1 Platform Powering Health and Wellness
            </h1>
            <p className="text-xl font-bold text-gray-600">
              We're restoring home as the primary place of personal well-being
            </p>
            <p className="text-gray-600">
              Health is not just about what you're eating. It's also about what you're thinking and saying
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-full">
                Browse Courses
              </button>
              <button className="border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-medium py-2 px-4 rounded-full">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative max-h-screen">
            <div className="object-center h-full w-full overflow-hidden rounded-3xl">
              <img
                src={bannerImage}
                alt="Abstract wellness illustration"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className='absolute top-1/4 -left-8'>
                <img 
                src={frame} 
                alt="frame"
                className='w-16 h-16' />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/50  backdrop-blur">
              
              <div className="space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-8">
                
                <div className='flex space-x-4 p-2 md:p-4'>
                  <div className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold w-1/2 m-auto">12,000+</div>
                  <div className='border border-black/40 h-14 m-auto'></div>
                  <div className="text-md md:text-2xl w-1/2 m-auto">Happy learners rely on us regularly</div>
                </div>

                <div className="flex w-full bg-white/60 rounded-xl p-4">
                  <div className='w-1/2 text-center text-lg m-auto'>Find your wellbeing</div>
                  <div className='w-1/2 text-left text-gray-500 text-sm md:text-lg'>By prioritizing self-care and making informed choices,
                  one can enhance their overall quality of life</div>
                </div>

              </div>

            </div>


          </div>
        </div>
      </div>
    </section>
  )
}