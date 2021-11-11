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
        <Route path="/portfolio/" element={<Index />}>
          <Route index element={<AboutMe />} />
          <Route path="works" element={<Works />} />
          <Route path="comments" element={<Comments />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
