import React from 'react'
import {Hero} from './components/Hero'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Testimonials } from './components/Testimonial'
import { Faq } from './components/Faqs'
import useTitle from '../../hooks/useTitle'


export const Home = () => {
  useTitle('Home')
  return (
    <main>
        <Hero/>
        <FeaturedProducts/>
        <Testimonials/>
        <Faq/>
    </main>
  )
}


