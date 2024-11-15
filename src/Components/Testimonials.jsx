import { useState } from 'react'
import { Quote } from 'lucide-react'
import avatar1 from '../assets/avatar1.png'

const testimonials = [
  {
    id: 1,
    author: "Kilian Murphe",
    avatar: avatar1,
    quote: "The interactive elements and learning forums where I can connect with other learners."
  },
  {
    id: 2,
    author: "Kilian Murphe",
    avatar: avatar1,
    quote: "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life."
  },
  {
    id: 3,
    author: "Kilian Murphe",
    avatar: avatar1,
    quote: "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging."
  },
  {
    id: 4,
    author: "Kilian Murphe",
    avatar: avatar1,
    quote: "It's not just about physical health but mental and emotional well-being too."
  },
  {
    id: 5,
    author: "Kilian Murphe",
    avatar: avatar1,
    quote: "I love the flexibility of the courses. I can learn at my own pace and revisit the material whenever I need to."
  }
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Learners love EduPath. See why
          </h2>
          <p className="text-xl">they rate us 4.9 out of 5</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden ">
            <div 
              className="flex transition-transform duration-300 ease-in-out "
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 "
                >
                  <div className="bg-[#9998E1]/30 rounded-lg p-8 relative">
                    <Quote className="absolute top-4 right-4 text-[#9998E1] h-8 w-8" />
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-medium">{testimonial.author}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-violet-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}