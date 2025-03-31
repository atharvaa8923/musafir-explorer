import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from '@/pages/Index';
import Destinations from '@/pages/Destinations';
import DestinationDetail from '@/pages/DestinationDetail';
import Itinerary from '@/pages/Itinerary';
import NotFound from '@/pages/NotFound';
import { Toaster } from "@/components/ui/toaster"
import Admin from '@/pages/Admin';

function App() {
  return (
    <div className="app">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
