"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BookOpen, Target } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Users, value: "50,000+", label: "Students Worldwide" },
    { icon: BookOpen, value: "200+", label: "Expert Courses" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Target, value: "10+", label: "Years Experience" },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly evolve our teaching methods and technology to provide the best learning experience.",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in education and strive for excellence in everything we do.",
      icon: "⭐",
    },
    {
      title: "Accessibility",
      description: "Quality education should be accessible to everyone, regardless of their background or location.",
      icon: "🌍",
    },
    {
      title: "Community",
      description: "We build strong learning communities where students support and learn from each other.",
      icon: "🤝",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">About Think About</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about transforming education through technology and innovation, making quality learning
            accessible to everyone, everywhere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              At Think About, we believe that education is the key to unlocking human potential. Our mission is to
              democratize access to high-quality education by leveraging cutting-edge technology and innovative teaching
              methodologies.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We're committed to creating an inclusive learning environment where students from all backgrounds can
              thrive, grow, and achieve their dreams. Our expert instructors and comprehensive curriculum ensure that
              every student receives the support they need to succeed.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform -rotate-6 opacity-20"></div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="About Think About"
                width={500}
                height={400}
                className="relative rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
