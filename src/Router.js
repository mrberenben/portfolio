import { BrowserRouter, Routes, Route } from 'react-router-dom';

// layout
import Index from './layout';

// pages
import AboutMe from './pages/AboutMe';
import Works from './pages/Works';
import Comments from './pages/Comments';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Index />} />

        <Route path="/portfolio/about" element={<AboutMe />} />
        <Route path="/portfolio/works" element={<Works />} />
        <Route path="/portfolio/comments" element={<Comments />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
