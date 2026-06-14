import React, { useEffect } from 'react'
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdminBookings from './pages/AdminBookings';
import AdminLogin from './pages/AdminLogin';
import AdminRoute from "./components/AdminRoute";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/admin/bookings' element={
          <AdminRoute>
            <AdminBookings />
          </AdminRoute>
        } />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </div>
  )
}

export default App