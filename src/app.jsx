import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ScrollToTop } from './components/scroll-to-top'
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import Faqs from './routes/faqs'

export default function App() {
  
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<Faqs />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
