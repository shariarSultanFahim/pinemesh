import { ChevronLeft, ChevronRight, Clock, BookOpen } from 'lucide-react'
import { useEffect, useState } from "react"
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avatar2.jpg"
import avatar3 from "../assets/avatar3.jpg"
import avatar4 from "../assets/avatar4.jpg"
import Courses1 from "../assets/Courses1.jpg"
import Courses2 from "../assets/Courses2.jpg"
import Courses3 from "../assets/Courses3.jpg"
import Courses4 from "../assets/Courses4.jpg"
// Sample course data
const courses = [
  {
    id: 1,
    title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
    image: Courses1,
    categories: ["Beginner", "Health and Diet"],
    rating: 4.9,
    reviews: 478,
    duration: "5h 24m",
    lessons: 31,
    instructor: {
      name: "Kilian Murphy",
      avatar: avatar1
    },
    price: 40
  },
  {
    id: 2,
    title: "Parenting in the Digital Age: Navigating Screen Time",
    image: Courses2,
    categories: ["Intermediate", "Health and Wellness"],
    rating: 4.8,
    reviews: 365,
    duration: "6h 15m",
    lessons: 31,
    instructor: {
      name: "Sarah Hopkins",
      avatar: avatar2
    },
    price: 50
  },
  {
    id: 3,
    title: "Holistic Health: Integrating Mind, Body, and Spirit",
    image: Courses3,
    categories: ["Beginner", "Mind and Soul"],
    rating: 4.9,
    reviews: 412,
    duration: "4h 30m",
    lessons: 31,
    instructor: {
      name: "Luna Karin",
      avatar: avatar3
    },
    price: 45
  },
  {
    id: 4,
    title: "Introduction to healthy Diet and Nutrition for you.",
    image: Courses4,
    categories: ["Beginner", "Health and Diet"],
    rating: 4.9,
    reviews: 478,
    duration: "5h 24m",
    lessons: 31,
    instructor: {
      name: "Kate Winslate",
      avatar: avatar4
    },
    price: 40
  },
  {
    id: 5,
    title: "Parenting in the Digital Age: Navigating Screen Time",
    image: Courses2,
    categories: ["Intermediate", "Health and Wellness"],
    rating: 4.8,
    reviews: 365,
    duration: "6h 15m",
    lessons: 31,
    instructor: {
      name: "Sarah Hopkins",
      avatar: avatar2
    },
    price: 50
  },
  {
    id: 6,
    title: "Holistic Health: Integrating Mind, Body, and Spirit",
    image: Courses3,
    categories: ["Beginner", "Mind and Soul"],
    rating: 4.9,
    reviews: 412,
    duration: "4h 30m",
    lessons: 31,
    instructor: {
      name: "Luna Karin",
      avatar: avatar3
    },
    price: 45
  },
  
]

export default function PopularCourses() {
  const [startIndex, setStartIndex] = useState(0)

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % Math.max(0, courses.length - 3))
  }

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + Math.max(0, courses.length - 3)) % Math.max(0, courses.length - 3))
  }

  useEffect(()=>{
    const interval = setInterval(nextSlide, 1500);
    return () => clearInterval(interval);
  })

  return (
    <section className="py-16 max-w-screen-xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col md:flex-row justify-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our popular courses</h2>
            <p className="text-gray-600 max-w-2xl">
                By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience, and foster a sense of inner peace and balance
            </p>
          </div>

          <div className='flex gap-2 p-4 m-auto md:my-auto md:mx-0'>
            <button
                onClick={prevSlide}
                className=" w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center"
                aria-label="Previous courses"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={nextSlide}
                className=" w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center"
                aria-label="Next courses">
                <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {courses.slice(startIndex, startIndex + 4).map((course) => (
              <div key={course.id} className="min-w-[300px] flex-1">
                <div className="bg-white h-full rounded-lg overflow-hidden shadow-md">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-5">
                    <div className="flex gap-2 mb-3">
                      {course.categories.map((category, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2">{course.title}</h3>
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {course.rating} ({course.reviews})
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="mr-3">{course.duration}</span>
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center">
                        <img
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm font-medium">
                          {course.instructor.name}
                        </span>
                      </div>
                      <span className="font-bold">${course.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}