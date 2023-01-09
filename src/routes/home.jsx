import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'
import { Image } from '../components/Image'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Welcome to EyeNetram!"
        content="This system provides a retinal image classification into 4 classes - Gluacoma, Diabetic Retinopathy, Age
        related macular degeneration and normal eye"
        />
        <Image />
    </Layout>
  )
}
