import React, { Suspense,lazy } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import ConferencesPage from './pages/ConferencesPage';
import ConferencesDetails from './pages/ConferencesDetails';

const FieldTrips = lazy(() => import('./pages/FieldTrips'));
const FieldTripsDetails = lazy(() => import('./pages/FieldTripsDetails'));
const People = lazy(() => import('./pages/People'));
const Privacy = lazy(() => import('./pages/Privacy'));
const PeopleDetails = lazy(() => import('./pages/PeopleDetails'));
const Publications = lazy(() => import('./pages/Publications'));
const Contact = lazy(() => import('./pages/Contact'));
const RecentNewsPage = lazy(() => import('./pages/RecentNewsPage'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));



const App = () => {
  return (
    <Router>
      <Navigation />
      <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/people" element={<People />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/publications" element={<Publications />}/>
        <Route path="/field-visits" element={<FieldTrips />}/>
        <Route path="/blogs" element={<BlogsPage />}/>
        <Route path="/conferences" element={<ConferencesPage />}/>
        <Route path="/conferences/:Title" element={<ConferencesDetails />}/>
        <Route path="/recent-news" element={<RecentNewsPage />}/>
        <Route path="/blogs/:Title" element={<BlogDetails />}/>
        <Route path="/privacy-policy" element={<Privacy />}/>
        <Route path="/people/:Name" element={<PeopleDetails />} />
        <Route path="/field-visits/:Title" element={<FieldTripsDetails />} />
        
      </Routes>
      </Suspense>
      <ScrollToTop/>
    </Router>
  )
}

export default App